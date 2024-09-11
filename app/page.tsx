import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Products from "@/components/Products";
import Policies from "@/components/Policies";
import Updated from "@/components/Updated";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Carousel />
      <Products />
      <Policies />
      <Updated />
      <Footer />
    </main>
  );
}
