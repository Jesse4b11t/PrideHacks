import "./App.css";
// import Carousel from "./Carousel";
// import data from "./data";
import Navbar from "./Navbar";
import Shop from "./Pages/Shop";
import About from "./Pages/About"
import Home from "./Pages/Home"

function App() {
  console.log(window.location)
   let component
   switch (window.location.pathname){
    case "/":
       component = <Home />
      break
      case "/shop":
         component = <Shop />
        break
        case "/about":
          component = <About />
          break
  }
  return (
    <div>
    <>
      <Navbar/>
      <div className="container">
      {component}
      </div>
    </>
    </div>
    // <div className="App">

    //   <Carousel images={data} />
    // </div>
  );
}

export default App;