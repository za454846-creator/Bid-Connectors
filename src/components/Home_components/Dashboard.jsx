"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
const TABS = [
  { id: "dashboard", key: "dashboard", icon: "bi-bar-chart-fill" },
  { id: "bid-manager", key: "bidManager", icon: "bi-clipboard-check-fill" },
  { id: "estimating", key: "estimating", icon: "bi-calculator-fill" },
  { id: "analytics", key: "analytics", icon: "bi-graph-up-arrow" },
];

const CHART_HEIGHTS = [60, 75, 68, 82, 78];

const STATUS_CLASS = {
  won: "status-won",
  lost: "status-lost",
  pending: "status-pending",
  submitted: "status-submitted",
};

const Dashboard = () => {
  const { t } = useLanguage();
  const d = t.dashboard;
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-demo text-center mb-5">
          <span className="badge-features mb-3">{d.badge}</span>
          <h2 className="dashboard-demo-title">{d.title}</h2>
          <p>{d.desc}</p>
        </div>

        <div className="dashboard_content">
          <div className="dashboard_nav">
            <div className="project_finder">
              <h2 className="project_heading">ProjectFinder</h2>
              <span className="live-badge">{d.live}</span>
            </div>
            <div className="dashboard-actions">
              <button className="icon-btn" aria-label="Notifications"><i className="bi bi-bell-fill"></i></button>
              <button className="icon-btn" aria-label="Profile"><i className="bi bi-person-fill"></i></button>
            </div>
          </div>

          <div className="main-layout">
            <div className="vertical-tabs">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`vertical-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon"><i className={`bi ${tab.icon}`}></i></span>
                  <span className="tab-label">{d.tabs[tab.key]}</span>
                </button>
              ))}
            </div>

            <div className="tab-content-area">
              {activeTab === "dashboard" && (
                <div className="dashboard-tab">
                  <div className="stats-grid">
                    {d.stats.map((stat, idx) => (
                      <div key={idx} className="stat-card">
                        <div className="stat-label">{stat.label}</div>
                        <div className="stat-value"><bdi>{stat.value}</bdi></div>
                        <div className="stat-change up"><bdi>{stat.change}</bdi></div>
                      </div>
                    ))}
                  </div>

                  <div className="projects-section">
                    <div className="projects-grid">
                      {d.projects.map((project, idx) => (
                        <div key={idx} className="project-card">
                          <div className="project-category">{project.category}</div>
                          <h3 className="project-title">{project.title}</h3>
                          <div className="project-value"><bdi>{project.value}</bdi></div>
                          <div className="project-footer">
                            <span>{project.days}</span>
                            <span>{project.location}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "bid-manager" && (
                <div className="bid-manager-tab">
                  <div className="bids-table-container">
                    <table className="bids-table">
                      <thead>
                        <tr>
                          <th>{d.table.project}</th>
                          <th>{d.table.value}</th>
                          <th>{d.table.status}</th>
                          <th>{d.table.date}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {d.bids.map((bid, idx) => (
                          <tr key={idx}>
                            <td>{bid.project}</td>
                            <td><bdi>{bid.value}</bdi></td>
                            <td>
                              <span className={`status-badge ${STATUS_CLASS[bid.status] || "status-submitted"}`}>
                                {d.status[bid.status]}
                              </span>
                            </td>
                            <td>{bid.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bid-summary">
                    <div className="summary-item"><span>{d.summary.totalBids}</span><strong>{d.bids.length}</strong></div>
                    <div className="summary-item"><span>{d.summary.winRate}</span><strong><bdi>34.2%</bdi></strong></div>
                    <div className="summary-item"><span>{d.summary.totalValue}</span><strong><bdi>$86.0M</bdi></strong></div>
                  </div>
                </div>
              )}

              {activeTab === "estimating" && (
                <div className="estimating-tab">
                  <div className="estimates-list">
                    {d.estimates.map((est, idx) => (
                      <div className="estimate-item" key={idx}>
                        <div className="estimate-info"><h3>{est.title}</h3><p>{est.sub}</p></div>
                        <div className="estimate-progress">
                          <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${est.percent}%` }}></div>
                          </div>
                          <span className="progress-percent"><bdi>{est.percent}%</bdi></span>
                        </div>
                        <div className="estimate-value"><bdi>{est.value}</bdi></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="analytics-tab">
                  <div className="analytics-grid">
                    <div className="analytics-card">
                      <h3>{d.analytics.winTrend}</h3>
                      <div className="chart-bars">
                        {d.analytics.months.map((month, i) => (
                          <div key={month} className="chart-bar" style={{ height: `${CHART_HEIGHTS[i]}px` }}>
                            <span>{month}</span>
                          </div>
                        ))}
                      </div>
                      <div className="metric-value">
                        <bdi>+2.1%</bdi> <span className="metric-label">{d.analytics.vsLastMonth}</span>
                      </div>
                    </div>

                    <div className="analytics-card">
                      <h3>{d.analytics.byCategory}</h3>
                      <div className="category-stats">
                        {d.analytics.categories.map((cat) => (
                          <div className="category-item" key={cat.name}>
                            <span>{cat.name}</span>
                            <span className="cat-value"><bdi>{cat.value}</bdi></span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="analytics-card full-width">
                      <h3>{d.analytics.keyMetrics}</h3>
                      <div className="metrics-row">
                        {d.analytics.metrics.map((m) => (
                          <div className="metric-box" key={m.desc}>
                            <div className="metric-num"><bdi>{m.num}</bdi></div>
                            <div className="metric-desc">{m.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;