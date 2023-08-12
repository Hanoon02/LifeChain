import Landing from "./Pages/Landing/Landing";
import NavBar from "./Pages/NavBar/NavBar";
import Slideshow from "./Pages/Slideshow/Slideshow";
import Features from "./Pages/Features/Features";
import Footer from "./Pages/Footer/Footer";
import AppFeatures from "./Pages/AppFeatures/AppFeatures";
import Articles from "./Pages/Articles/Articles";

function App() {
  return (
    <div className="App min-h-screen">
      <NavBar />
      <Landing />
      <AppFeatures />
      <Features />
      <Slideshow />

      <Articles />
      <Footer />
    </div>
  );
}

export default App;
