import { Box, Tab } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import HandshakeIcon from "@mui/icons-material/Handshake";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Aboutus() {
  return (
    <Box className="flex w-full text-black bg-gray-100 mt-28">
      <Box className="flex-row w-1/2 px-10 p-8">
        <Box>
          <h1 className="text-5xl mb-8">Who We Are</h1>
        </Box>
        <Box>
          <p className="text-gray-600">
            Trenton Forging is an American forging company and leading producer
            of custom forgings for a wide array of industries. In business for
            over 50 years, we have remained the strongest of metal forging
            companies due to our focus on quality, flexible operations, quickest
            time to market, continuous improvement, and willingness to go above
            and beyond to meet the needs of our customers.
          </p>
        </Box>
        <Box className="my-4">
          <p>
            <FlagIcon /> Started in 2023 <Tab /> <HandshakeIcon /> Reliable
            <Tab /> <FavoriteIcon /> Caring
          </p>
        </Box>
      </Box>
      <Box className="flex-row w-1/2 px-10 p-8" bgcolor={"secondary.main"}>
        <Box color="info.main">
          <h1 className="text-5xl mb-8">What We Do</h1>
        </Box>
        <Box color="info.main">
          <p className="">
            Trenton Forging is an American forging company and leading producer
            of custom forgings for a wide array of industries. In business for
            over 50 years, we have remained the strongest of metal forging
            companies due to our focus on quality, flexible operations, quickest
            time to market, continuous improvement, and willingness to go above
            and beyond to meet the needs of our customers. siness for over 50
            years, we have remained the strongest of metal forging companies due
            to our focus on quality,
          </p>
        </Box>
        <Box color="info.main" className="my-4">
          <p>
            <FlagIcon /> Started in 2023 <Tab /> <HandshakeIcon /> Reliable
            <Tab /> <FavoriteIcon /> Caring
          </p>
        </Box>
        <Box color="info.main">
          <p>
            <FlagIcon /> Started in 2023 <Tab /> <HandshakeIcon /> Reliable
            <Tab /> <FavoriteIcon /> Caring
          </p>
        </Box>
      </Box>
    </Box>
  );
}
