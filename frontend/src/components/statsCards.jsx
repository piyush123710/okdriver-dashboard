import "../styles/dashboard.css";

function StatsCards({ events }) {

  const violations = events.filter(e => e.event_type === "speeding").length;

  const drivers = new Set(events.map(e => e.driver_id)).size;

  const riskScore = violations * 10;

  return (

    <div className="stats-container">

      <div className="card">
        <h3>Total Events</h3>
        <p>{events.length}</p>
      </div>

      <div className="card">
        <h3>Live Drivers</h3>
        <p>{drivers}</p>
      </div>

      <div className="card">
        <h3>Violations</h3>
        <p>{violations}</p>
      </div>

      <div className="card">
        <h3>Risk Score</h3>
        <p>{riskScore}</p>
      </div>

    </div>

  );
}

export default StatsCards;
