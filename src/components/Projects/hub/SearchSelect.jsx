"use client";

/**
 * SearchSelect
 * Dropdown with a search box (State and City filters).
 * Keyboard: Arrow Up/Down, Home/End, Enter to select, Escape to close.
 *
 * props:
 *   id, labelText, value, onChange(value)
 *   groups: [{ label?, options: [{ value, label, hint?, keywords? }] }]
 *   allLabel -> first option ("All states"), value ""
 *   searchPlaceholder, noMatchText, disabled
 */
import { useEffect, useId, useMemo, useRef, useState } from "react";

const norm = (s) => (s || "").toString().toLowerCase().trim();

export default function SearchSelect({
  id,
  labelText,
  value,
  onChange,
  groups,
  allLabel,
  searchPlaceholder,
  noMatchText,
  disabled = false,
}) {
  const uid = useId();
  const listId = `${id}-list-${uid}`;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Filter groups by the search text
  const filteredGroups = useMemo(() => {
    const q = norm(query);
    if (!q) return groups;
    return groups
      .map((g) => ({
        ...g,
        options: g.options.filter((o) =>
          [o.label, o.hint, ...(o.keywords || [])].some((txt) => norm(txt).includes(q))
        ),
      }))
      .filter((g) => g.options.length);
  }, [groups, query]);

  // Flat list for keyboard navigation ("All" only when search is empty)
  const flat = useMemo(() => {
    const items = query ? [] : [{ value: "", label: allLabel }];
    filteredGroups.forEach((g) => items.push(...g.options));
    return items;
  }, [filteredGroups, allLabel, query]);

  const selected = useMemo(() => {
    for (const g of groups) {
      const hit = g.options.find((o) => o.value === value);
      if (hit) return hit;
    }
    return null;
  }, [groups, value]);

  const close = (focusButton = true) => {
    setOpen(false);
    setQuery("");
    if (focusButton) buttonRef.current?.focus();
  };

  const choose = (val) => {
    onChange(val);
    close();
  };

  // On open: focus the search box and highlight the selected item
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const idx = flat.findIndex((o) => o.value === value);
    setActiveIndex(idx >= 0 ? idx : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // New search: highlight the first result
  useEffect(() => setActiveIndex(0), [query]);

  // Keep the active option in view
  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) close(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const onKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, flat.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        e.preventDefault();
        setActiveIndex(flat.length - 1);
        break;
      case "Enter":
        e.preventDefault();
        if (flat[activeIndex]) choose(flat[activeIndex].value);
        break;
      case "Escape":
        e.preventDefault();
        close();
        break;
      case "Tab":
        close(false);
        break;
      default:
    }
  };

  // Index counter while rendering groups
  let idx = -1;
  const optionId = (i) => `${listId}-opt-${i}`;

  const renderOption = (o) => {
    idx += 1;
    const i = idx;
    const isSelected = o.value === value;
    return (
      <li
        key={o.value}
        id={optionId(i)}
        data-index={i}
        role="option"
        aria-selected={isSelected}
        className={`ss-option${i === activeIndex ? " is-active" : ""}${isSelected ? " is-selected" : ""}`}
        onMouseEnter={() => setActiveIndex(i)}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => choose(o.value)}
      >
        <span className="ss-option-label">{o.label}</span>
        {o.hint && <span className="ss-option-hint">{o.hint}</span>}
        {isSelected && <i className="bi bi-check2" aria-hidden="true"></i>}
      </li>
    );
  };

  return (
    <div className={`pj-field ss${open ? " is-open" : ""}`} ref={rootRef}>
      <span id={`${id}-label`}>{labelText}</span>

      <button
        ref={buttonRef}
        id={id}
        type="button"
        className="ss-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-label ${id}`}
        disabled={disabled}
        onClick={() => (open ? close() : setOpen(true))}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <span className={selected ? "" : "ss-placeholder"}>{selected ? selected.label : allLabel}</span>
        <i className="bi bi-chevron-down" aria-hidden="true"></i>
      </button>

      {open && (
        <div className="ss-panel">
          <div className="ss-search">
            <i className="bi bi-search" aria-hidden="true"></i>
            <input
              ref={inputRef}
              type="text"
              role="combobox"
              aria-expanded="true"
              aria-controls={listId}
              aria-activedescendant={flat.length ? optionId(activeIndex) : undefined}
              aria-autocomplete="list"
              aria-label={searchPlaceholder}
              placeholder={searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
            />
          </div>

          <ul className="ss-list" id={listId} role="listbox" ref={listRef} aria-labelledby={`${id}-label`}>
            {!query && renderOption({ value: "", label: allLabel })}

            {filteredGroups.map((g, gi) =>
              g.label ? (
                <li key={g.label} role="presentation">
                  <div className="ss-group-label" id={`${listId}-g${gi}`}>{g.label}</div>
                  <ul role="group" aria-labelledby={`${listId}-g${gi}`}>
                    {g.options.map(renderOption)}
                  </ul>
                </li>
              ) : (
                g.options.map(renderOption)
              )
            )}

            {!flat.length && <li className="ss-empty" role="presentation">{noMatchText}</li>}
          </ul>
        </div>
      )}
    </div>
  );
}
