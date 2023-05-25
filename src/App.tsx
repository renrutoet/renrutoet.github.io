import { useState } from "react";
import { HeroSection } from "./sections/Hero";
import { AboutSection } from "./sections/About";
import { WorkSection } from "./sections/Work";
import { ContactSection } from "./sections/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="h-screen ">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}

export default App;
