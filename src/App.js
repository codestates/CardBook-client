import sample from "./output.mp4";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="left">
        <video className="videoTag" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
      </div>
      <div className="right">
        <h1>CardBook</h1>
      </div>
    </div>
  );
}

export default App;
