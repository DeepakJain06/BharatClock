import ClockHeading from "./components/ClockHeading"
import ClockSlogan from "./components/ClockSlogan"
import CurrentTime from "./components/ClockTime"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  

  return (
    <div id="div-main"> <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center></div>
   
  );
}

export default App
