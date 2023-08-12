import Landing from "./Pages/Landing/Landing";
import NavBar from "./Pages/NavBar/NavBar";
import Features from "./Pages/Features/Features";
import Footer from "./Pages/Footer/Footer";
import AppFeatures from "./Pages/AppFeatures/AppFeatures";
import Articles from "./Pages/Articles/Articles";
import Interview from "./Pages/Interview/Interview";

function App() {
  return (
    <div className="App min-h-screen">
      <NavBar />
      <Landing />
      <AppFeatures />
      <Interview/>
      <Features />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
