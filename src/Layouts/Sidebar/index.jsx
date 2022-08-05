import React from "react";

function Sidebar(props) {
  return (
    <div
      className={
        "sidebar-dash d-flex flex-column flex-shrink-0 p-3 text-white" +
        getClassActive()
      }
    >
      <div className="flex-column pt-3 pt-md-0 nav">
        <div className="nav-item logo">
          <a href="#" className="nav-link">
            <span>
              <i className="fa fa-home" aria-hidden="true"></i>
              <span className="sidebar-text_logo">i Love English</span>
            </span>
          </a>
        </div>
        <div className="nav-item active">
          <a href="#" className="nav-link">
            <span>
              <i className="fa fa-pie-chart" aria-hidden="true"></i>
              <span className="sidebar-text">overview</span>
            </span>
          </a>
        </div>
        <div className="nav-item">
          <a href="#" className="nav-link">
            <span>
              <i className="fa fa-comments-o" aria-hidden="true"></i>
              <span className="sidebar-text">messages</span>
            </span>
          </a>
        </div>
        <div className="nav-item">
          <a href="#" className="nav-link">
            <span>
              <i className="fa fa-history" aria-hidden="true"></i>
              <span className="sidebar-text">historys</span>
            </span>
          </a>
        </div>
        <div className="nav-item">
          <a href="#" className="nav-link">
            <span>
              <i className="fa fa-cog" aria-hidden="true"></i>
              <span className="sidebar-text">settings</span>
            </span>
          </a>
        </div>
        <div className="nav-item">
          <a href="#" className="nav-link">
            <span>
              <i className="fa fa-tasks" aria-hidden="true"></i>
              <span className="sidebar-text">task list</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );

  function getClassActive() {
    return props.showSidebar ? " active" : "";
  }
}

export default Sidebar;
