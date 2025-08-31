import "./reset.css";
import Header from "@/components/Header";
import About from "@/components/About";
import Products from "@/components/Products";
import Slogan from "@/components/Slogan";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Products />
        <Slogan />
      </main>
    </>
  );
}
