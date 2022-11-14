import TimeControls from "../model/timecontrols";

function Timer({ timeControl }) {
  const minutes = TimeControls[timeControl][0];

  return (
    <div>
      {minutes}
    </div>
  );
}

export default Timer;