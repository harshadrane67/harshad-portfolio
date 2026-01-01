import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        < Contact/>
      </main>
    </>
  );
}

export default App;
