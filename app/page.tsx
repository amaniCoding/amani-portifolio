import AboutMe from "./ui/about-me";
import Certificates from "./ui/cerfificates";
import Footer from "./ui/footer";
import GetInTouch from "./ui/get-in-touch";
import HeroImage from "./ui/hero-image";
import Navbar from "./ui/nav-bar";
import TechStacks from "./ui/tech-stack";
import Works from "./ui/works";




export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroImage />
      <AboutMe/>
      <TechStacks/>
      <Certificates/>
      <Works/>
      <GetInTouch/>
      <Footer/>
    </main>
  );
}
