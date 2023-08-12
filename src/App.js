import Landing from "./Pages/Landing/Landing";
import NavBar from "./Pages/NavBar/NavBar";
import Slideshow from "./Pages/Slideshow/Slideshow";
import Features from "./Pages/Features/Features";

function App() {
  return (
    <div className="App min-h-screen">
        <NavBar />
        <Landing />
        <Features/>
        <Slideshow />
    </div>
  );
}

export default App;
