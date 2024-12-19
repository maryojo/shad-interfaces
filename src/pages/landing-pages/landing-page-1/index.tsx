import AboutSection from "./components/AboutSection";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";



export default function LandingPage01() {
  return (
    <div className="afcad-flux flex flex-col">
      <main>
        <HeroSection/>
        <AboutSection/>
        <Feedback/>
        <Footer/>
      </main>
    </div>
  )
}
