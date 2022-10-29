import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Button id="twitter" link="https://twitter.com/dprincecoder">Twitter Link</Button>
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
        <Socials />
      </div>
      <Footer />
    </div>
  );
}

export default App;
