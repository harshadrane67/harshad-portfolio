import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Experience />
      </main>
    </>
  );
}

export default App;
