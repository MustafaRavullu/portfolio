import About from "@/components/about";
import Certificates from "@/components/certificates";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Projects from "@/components/projects";
import ActiveSectionContextProvider from "@/contexts/active-section-context";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <ActiveSectionContextProvider>
        <Header />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          {/* <Experience /> */}
          <Projects />
          <Certificates />
        </main>
      </ActiveSectionContextProvider>
    </div>
  );
}
