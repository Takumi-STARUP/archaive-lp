import Image from "next/image";
import AboutSection from "@/components/featuture/lp/aboutSection";
import ProblemSection from "@/components/featuture/lp/problemSectio";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";  

export default function Home() {
  return (
    <div>
      <Header />
      <main>
      <AboutSection />
      <ProblemSection />
      </main>
      <Footer />
    </div>
  );
}
