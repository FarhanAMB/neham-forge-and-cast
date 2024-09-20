"use client";
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import ScrollToTop from "@/components/ScrollToTop";
// import { createTheme } from "@mui/material/styles";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#6599DC",
//     },
//     secondary: {
//       main: "#FFD66F",
//     },
//   },
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider theme={theme}>
          <Header color="primary" color2="secondary" /> */}
        {children}
        {/* <ScrollToTop />
          <Footer color="primary" color2="secondary" />
        </ThemeProvider> */}
      </body>
    </html>
  );
}
