import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import "./style.css";
function App() {
  return (
    <div>
      <h1 className="heading">Business Card</h1>
      <div className="App">
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
