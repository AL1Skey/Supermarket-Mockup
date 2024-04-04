import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-primetext">
      <Navbar></Navbar>
      <Header></Header>
      <ListItem></ListItem>
      <div></div>
    </main>
  );
}
