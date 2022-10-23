import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Button>Twitter Link</Button>
        <Button id="btn__zuri" link="https://training.zuri.team/">
          Zuri Team
        </Button>
        <Button id="books" link="http://books.zuri.team/">
          Zuri Books
        </Button>

        <Button
          id="book__python"
          link="https://books.zuri.team/python-for-beginers?ref_id=dprincecoder"
        >
          Python Books
        </Button>
        <Button id="pitch" link="https://background.zuri.team/">
          Background Check for Coders
        </Button>
        <Button id="book__design" link="https://books.zuri.team/design-rules">
          Design Books
        </Button>
      </div>
    </div>
  );
}

export default App;
