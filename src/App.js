import images from "./images/5.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={images}
            className="App-logo 
        img-fluid"
            alt="nature"
          />
        </header>
        <main>
          <Dictionary defaultKeyWord="Sunset" />
        </main>
        <footer className="App-footer">Coded by Bih Jovi</footer>
      </div>
    </div>
  );
}
