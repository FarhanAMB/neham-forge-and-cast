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

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFD66F",
    },
    secondary: {
      main: "#6599DC",
    },
    info: {
      main: "#ffffff",
      light: "#000000",
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
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
