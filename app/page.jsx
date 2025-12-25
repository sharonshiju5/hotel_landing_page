import Homepage from "@/components/home";
import Explore from "@/components/explore";
import Image from "next/image";
import UBExplore from "@/components/UBExplore";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Homepage />
      <UBExplore/>
      <Explore />
      <Footer />
    </div>
  );
}
