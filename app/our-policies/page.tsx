import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import SubHeaderBox from "@/components/SubHeaderBox";
import { title } from "process";
import Image from "next/image";

export default function OurPolicies() {
  return (
    <main>
      <SubHeaderBox title="Our Policies" />
      {data.map((item, index) => (
        <Box
          key={index}
          className={
            "p-10 m-4 my-10 mx-0 text-black rounded-3xl flex justify-evenly " +
            (index === 0 || index % 2 === 0 ? "" : "flex-row-reverse")
          }
          bgcolor={
            index === 0 || index % 2 === 0 ? "info.light" : "background.default"
          }
        >
          <Box className="w-3/5">
            <Typography variant="h5" className="my-4">
              {item.title}
            </Typography>
            <Typography className="text-lg">{item.content}</Typography>
          </Box>
          <Box className="w-1/4 relative">
            <Image
              src={item.img}
              alt={item.title}
              fill
              objectFit="cover"
              className="rounded-xl"
            />
          </Box>
        </Box>
      ))}
    </main>
  );
}

const data = [
  {
    title: "Privacy Policy",
    content:
      " We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services. We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services. We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services.",
    img: "/carousel1-1.jpg",
  },
  {
    title: "Refund Policy",
    content:
      " We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services. We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services. We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services.",
    img: "/carousel1-2.jpg",
  },
  {
    title: "Shipping Policy",
    content:
      " We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services. We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services. We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services.",
    img: "/carousel1-3.jpg",
  },
  {
    title: "Cancellation Policy",
    content:
      " We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services. We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services. We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services.",
    img: "/carousel2-1.jpg",
  },
  {
    title: "Terms & Conditions",
    content:
      " We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services. We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services. We are committed to delivering high-quality products and services that meet or exceed customer expectations. We strive to continuously improve our processes and systems to ensure consistent quality and reliability in all our products and services.",
    img: "/carousel2-2.jpg  ",
  },
];
