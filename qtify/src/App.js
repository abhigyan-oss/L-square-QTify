import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/section/section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Top Albums Section */}
      <Section title="Top Albums" type="top" />

      {/* New Albums Section */}
      <Section title="New Albums" type="new" />
    </>
  );
}

export default App;
