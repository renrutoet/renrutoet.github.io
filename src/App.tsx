import { useState } from "react";
import { HeroSection } from "./components/Hero";
import { AboutSection } from "./components/About";
import { WorkSection } from "./components/Work";
import { ContactSection } from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen ">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
}

export default App;
