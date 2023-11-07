import React, { useState, useEffect } from "react";
import PieChart from "../components/piechart";
import LineChart from "../components/linechart";

function Home() {
  const data = [
    {
      label: "Blogs Per Month",
      value: 56,
      icon: "journal",
      color: "success",
    },
    {
      label: "New Register",
      value: 123,
      icon: "person-plus",
      color: "primary",
    },
    {
      label: "Number Of Ads",
      value: 319,
      icon: "megaphone",
      color: "danger",
    },
    {
      label: "Number Of Contacts",
      value: 47,
      icon: "chat-left-text",
      color: "warning",
    },
  ];

  const [countedValues, setCountedValues] = useState(
    new Array(data.length).fill(1)
  );

  useEffect(() => {
    const intervals = data.map((item, index) => {
      const interval = setInterval(() => {
        if (countedValues[index] < item.value) {
          setCountedValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] += 1;
            return newValues;
          });
        } else {
          clearInterval(interval);
        }
      }, 10);
      return interval;
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [data]);

  return (
    <div className="p-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          {data.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light"
              key={index}
            >
              <div className="d-flex justify-content-between p-4 align-items-center bg-white border rounded border-secondary shadow-sm">
                <i className={`bi bi-${item.icon} fs-1 text-${item.color}`}></i>
                <div>
                  <span className="text-secondary">{item.label}</span>
                  <h2 style={{ color: "orange" }}>{countedValues[index]}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12 col-md-4 p-3">
            <PieChart />
          </div>
          <div className="col-12 col-md-8 p-3">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
