import "./reset.css";
import Header from "@/components/Header";
import About from "@/components/About";
import Products from "@/components/Products";
import Slogan from "@/components/Slogan";
import Partners from "@/components/Partners";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Products />
        <Slogan />
        <Partners />
        <Blog />
      </main>
      {/* <Footer /> */}
    </>
  );
}
