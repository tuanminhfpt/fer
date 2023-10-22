import React from "react";
import PieChart from "../components/piechart";
import LineChart from "../components/linechart";

function Home() {
  return (
    <div className="p-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-collection fs-1 text-success"></i>
              <div>
                <span>Blogs Per Month</span>
                <h2>50</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-person-add fs-1 text-primary"></i>
              <div>
                <span>New Register</span>
                <h2>300</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-badge-ad fs-1 text-danger"></i>
              <div>
                <span>Number Of Ads</span>
                <h2>100</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-chat-left-text fs-1 text-warning"></i>
              <div>
                <span>Number Of Contacts</span>
                <h2>40</h2>
              </div>
            </div>
          </div>
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
