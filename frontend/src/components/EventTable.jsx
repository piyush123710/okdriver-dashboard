import "../styles/dashboard.css";

function EventTable({ events }) {

  return (

    <div className="table-box">

      <h3>Driver Events</h3>

      <table>

        <thead>
          <tr>
            <th>Driver</th>
            <th>Event</th>
            <th>Speed</th>
          </tr>
        </thead>

        <tbody>

          {events.map((event, index) => (

            <tr
              key={index}
              className={event.speed > 80 ? "alert" : ""}
            >

              <td>{event.driver_id}</td>
              <td>{event.event_type}</td>
              <td>{event.speed}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default EventTable;
