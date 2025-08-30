import "./reset.css";
import Header from "@/components/Header";
import About from "@/components/About";
import Products from "@/components/Products";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Products />
      </main>
    </>
  );
}
