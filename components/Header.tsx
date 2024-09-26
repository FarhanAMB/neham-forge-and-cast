"use client";
import { Button } from "@mui/material";
import HoverNav from "@/components/HoverNav";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const navItems = [
    "Home",
    "About Us",
    "Our Policies",
    "Infrastructure",
    "Capabilities",
    "Contact Us",
  ];

  const path = usePathname();
  const barcolor = path === "/color2" ? "yellow" : "blue";

  return (
    <main className="sticky z-10 top-0 bg-foreground flex h-auto justify-between">
      <div className="h-10 w-2/12">
        <img src={barcolor === "blue" ? "/header1.png" : "/header3.png"}></img>
      </div>
      <div className="h-20 w-2/12">
        <Link href="/">
          <img src="/logo.png"></img>
        </Link>
      </div>
      <div className="flex flex-col w-3/5 items-end  ">
        <div>
          <ul className=" px-1 my-2 flex-row flex ">
            {navItems.map((item, index) => (
              <li key={index} className=" rounded-md mx-4 ">
                <Button
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  variant="text"
                  className="text-blue-500"
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="h-10 flex justify-end items-center"
          style={{
            backgroundImage: `url(${
              barcolor === "blue" ? "/header2.png" : "header4.png"
            })`,
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <div>
            <HoverNav />
          </div>
        </div>
      </div>
    </main>
  );
}
