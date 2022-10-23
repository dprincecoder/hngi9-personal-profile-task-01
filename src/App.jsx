import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Button>Twitter Link</Button>
      </div>
    </div>
  );
}

export default App;
