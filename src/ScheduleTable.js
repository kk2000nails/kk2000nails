const ScheduleTable = ({ schedule, onHourClick }) => (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          {schedule.map((_, index) => (
            <th key={index}>Employee {index + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 24 }, (_, hour) => (
          <tr key={hour}>
            <td>{`${hour}:00`}</td>
            {schedule.map((employee, index) => (
              <td
                key={index}
                onClick={() => onHourClick(hour, index)}
                style={{ cursor: "pointer", background: "#f0f0f0" }}
              >
                {employee[hour] ? employee[hour].task : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default ScheduleTable;
  