"use client";

import React from "react";
const defaultStats = [
  {
    value: "60,000+",
    label: "ACTIVE PROJECTS",
  },
  {
    value: "9,200+",
    label: "CONTRACTORS",
  },
  {
    value: "34%",
    label: "AVG WIN RATE",
  },
  {
    value: "$2B",
    label: "PROJECTS VALUE TRACKED",
  },
];

const StatsSection = ({ stats = defaultStats }) => {
  return (
    <section className="stats-section py-5">
      <div className="container">

        <div className="row g-4 text-center align-items-stretch">

          {stats.map((stat, index) => (
            <div
              className="col-12 col-sm-6 col-md-3 d-flex"
              key={index}
            >
              <div className="simple-stat-card w-100 d-flex flex-column justify-content-center">

                <h3>
                  {stat.value}
                </h3>

                <p>
                  {stat.label}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StatsSection;