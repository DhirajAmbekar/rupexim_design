import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "./components/Navbar";
import { Section1 } from "./pages/Section1";
import { Section2 } from "./pages/Section2";
import { Section3 } from "./pages/Section3";
import { Section4 } from "./pages/Section4";
import { Section5 } from "./pages/Section5";
import { Section6 } from "./pages/Section6";
import { Section7 } from "./pages/Section7";
import { Section8 } from "./pages/Section8";
import { Section9 } from "./pages/Section9";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </div>
    </>
  );
}

export default App;
