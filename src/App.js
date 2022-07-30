import images from "./images/5.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={images} className="App-logo img-fluid" alt="nature" />
        <a href="#" className="btn btn-primary">
          Hello world
        </a>
      </header>
    </div>
  );
}
