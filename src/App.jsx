import Button from "@mui/material/Button";
import {
  AccessAlarm as AccessAlarmIcon,
  ThreeDRotation,
} from "@mui/icons-material";

function App() {
  return (
    <>
      <div>minhchien</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  );
}

export default App;
