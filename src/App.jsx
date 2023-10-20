import Header from "./components/Header";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className=" bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <Services />
      <Work />
      <Projects />
      <Contact />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
}

export default App;
