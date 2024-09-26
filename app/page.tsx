"use client";
import Carousel from "@/components/home/Carousel";
import Products from "@/components/home/Products";
import Policies from "@/components/home/Policies";
import Updated from "@/components/home/Updated";
import Aboutus from "@/components/home/Aboutus";

export default function Home() {
  return (
    <main>
      <Carousel />
      <Products />
      <Policies />
      <Aboutus />
      <Updated />
    </main>
  );
}
