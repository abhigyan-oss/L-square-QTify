import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/section/section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section title="Top Albums" type="top" />
      <Section title="New Albums" type="new" />
    </>
  );
}

export default App;
