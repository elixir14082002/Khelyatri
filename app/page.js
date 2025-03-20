import Image from "next/image";
import Navbar from "./components/Navbar";
import SportsCard from "./components/SportsCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SportsCard />
    </div>
  );
}
