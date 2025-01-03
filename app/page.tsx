import AboutMe from "./ui/about-me";
import { BackToTop } from "./ui/back-to-top";
import Certificates from "./ui/cerfificates";
import Footer from "./ui/footer";
import GetInTouch from "./ui/get-in-touch";
import HeroImage from "./ui/hero-image";
import Navbar from "./ui/nav-bar";
import TechStacks from "./ui/tech-stack";
import Works from "./ui/works";




export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroImage />
      <AboutMe/>
      <Works/>
      <TechStacks/>
      <GetInTouch/>
      <Certificates/>
      <Footer/>
      <BackToTop/>
    </main>
  );
}
