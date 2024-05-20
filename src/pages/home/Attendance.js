function Attendance() {
  return (
    <>
      <h1>Attendance</h1>
      <div className="subjects">
        <div className="eg">
          <span className="material-icons-sharp">architecture</span>
          <h3>Organizational Behavior</h3>
          <h2>12/14</h2>
          <div className="progress">
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="number">
              <p>86%</p>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        <div className="mth">
          <span className="material-icons-sharp">functions</span>
          <h3>Discrete Mathematics</h3>
          <h2>27/29</h2>
          <div className="progress">
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="number">
              <p>93%</p>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        <div className="cs">
          <span className="material-icons-sharp">computer</span>
          <h3>Wireless Internet and Technology</h3>
          <h2>27/30</h2>
          <div className="progress">
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="number">
              <p>81%</p>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        <div className="cg">
          <span className="material-icons-sharp">dns</span>
          <h3>Data Structures and Algorithms</h3>
          <h2>24/25</h2>
          <div className="progress">
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="number">
              <p>96%</p>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        <div className="net">
          <span className="material-icons-sharp">router</span>
          <h3>Engineering Economics</h3>
          <h2>25/27</h2>
          <div className="progress">
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="number">
              <p>92%</p>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
      </div>
    </>
  );
}

export default Attendance;
