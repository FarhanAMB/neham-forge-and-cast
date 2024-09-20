"use client";
import Carousel from "@/components/Carousel";
import Products from "@/components/Products";
import Policies from "@/components/Policies";
import Updated from "@/components/Updated";
import Enquiry from "@/components/Enquiry";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Aboutus from "@/components/Aboutus";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#6599DC",
    },
    secondary: {
      main: "#FFD66F",
    },
    info: {
      main: "#000000",
      light: "#ffffff",
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <Carousel />
      <Products />
      <Policies />
      <Aboutus />
      <Updated />
      <Enquiry />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}
