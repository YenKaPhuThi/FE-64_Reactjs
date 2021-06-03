import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Product />
          </div>
          <div className="col-md-4">
            <Product />
          </div>
          <div className="col-md-4">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
