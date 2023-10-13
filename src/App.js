import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="lg:mt-40">
        <Section />
      </div>
      <Footer />
    </div>
  );
}

export default App;
