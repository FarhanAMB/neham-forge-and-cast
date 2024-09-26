import { Box, Typography, Tab } from "@mui/material";
import Image from "next/image";
import RestoreIcon from "@mui/icons-material/Restore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function AboutUsPage() {
  return (
    <main>
      <Box bgcolor={"Cgray.main"} className="my-2 p-4">
        <Typography variant="h1" sx={{ textAlign: "left", padding: 5 }}>
          About Us
        </Typography>
      </Box>
      <Box className="m-4 p-4 text-black ">
        <Typography variant="h3" marginY={3} color="primary.dark">
          Heading 1
        </Typography>
        <Box className="flex ">
          <Typography variant="body1" className="w-3/5">
            Neham Forge and Cast is a leading manufacturer of industrial valves
            and other products. We are committed to providing the best quality
            products to our customers. Our products are known for their
            reliability and durability. We have a team of highly skilled
            professionals who work tirelessly to ensure that our products meet
            the highest standards of quality. We are dedicated to providing
            excellent customer service and are always ready to assist our
            customers with any questions or concerns they may have. Our goal is
            to be the preferred supplier of industrial valves and other products
            for our customers. We look forward to serving you and meeting all
            your industrial valve needs.
          </Typography>
          <Box className="w-2/5 justify-center items-center flex">
            <Image
              src="/carousel2-5.jpg"
              alt="About Us"
              height={300}
              width={300}
              className="rounded-lg"
            />
          </Box>
        </Box>
        <Typography variant="h3" marginY={3} color="primary.dark">
          Heading 2
        </Typography>
        <Typography variant="body1">
          Neham Forge and Cast is a leading manufacturer of industrial valves
          and other products. We are committed to providing the best quality
          products to our customers. Our products are known for their
          reliability and durability. We have a team of highly skilled
          professionals who work tirelessly to ensure that our products meet the
          highest standards of quality. We are dedicated to providing excellent
          customer service and are always ready to assist our customers with any
          questions or concerns they may have. Our goal is to be the preferred
          supplier of industrial valves and other products for our customers. We
          look forward to serving you and meeting all your industrial valve
          needs. Neham Forge and Cast is a leading manufacturer of industrial
          valves and other products. We are committed to providing the best
          quality products to our customers. Our products are known for their
          reliability and durability. We have a team of highly skilled
          professionals who work tirelessly to ensure that our products meet the
          highest standards of quality. We are dedicated to providing excellent
          customer service and are always ready to assist our customers with any
          questions or concerns they may have. Our goal is to be the preferred
          supplier of industrial valves and other products for our customers. We
          look forward to serving you and meeting all your industrial valve
          needs.
        </Typography>
        <Typography
          variant="h5"
          className="text-center py-10 text-3xl text-gray-500 mt-16"
          sx={{ marginBottom: -8 }}
        >
          <RestoreIcon fontSize="large" color="secondary" /> Stat 120 <Tab />{" "}
          <CheckCircleOutlineIcon fontSize="large" color="secondary" /> Stat
          2220
          <Tab /> <EmojiEventsIcon fontSize="large" color="secondary" /> Stat
          320
        </Typography>
      </Box>
    </main>
  );
}
