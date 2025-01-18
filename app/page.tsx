import AboutMe from "./ui/about-me";
import { BackToTop } from "./ui/back-to-top";
import Certificates from "./ui/cerfificates";
import Footer from "./ui/footer";
import HeroImage from "./ui/hero-image";
import TechStacks from "./ui/tech-stack";
import Works from "./ui/works";




export default function Home() {
  return (
    <main className="relative">
      <HeroImage />
      <AboutMe/>
      <Works/>
      <TechStacks/>
      <Certificates/>
      <Footer/>
      <BackToTop/>
    </main>
  );
}
