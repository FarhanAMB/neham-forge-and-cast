import SubHeaderBox from "@/components/SubHeaderBox";
import { Typography, Box, List, ListItem, Button } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactUs() {
  return (
    <main>
      <SubHeaderBox title="Contact Us" />
      <Box className="flex py-8 justify-evenly">
        <Box className="">
          <List sx={{ color: "info.main" }}>
            <ListItem>
              <Typography
                variant="h4"
                color="primary.dark"
                className="my-8 py-4"
              >
                Contact Information
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5" className="font-semibold">
                Location
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className="text-lg">
                <PlaceIcon color="secondary" fontSize="large" /> 1234 Street
                Name, City Name, India
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5" className="font-semibold">
                Call Us
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className="text-lg">
                <LocalPhoneIcon color="secondary" fontSize="large" /> +91
                9488390300
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5" className="font-semibold">
                Email
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className="text-lg">
                <EmailIcon color="secondary" fontSize="large" /> abc@gmail.com
              </Typography>
            </ListItem>
          </List>
        </Box>

        {/* -x- */}

        <Box className="w-2/6">
          <List>
            <ListItem sx={{ padding: 0 }}>
              <Typography
                variant="h4"
                color="primary.dark"
                className="my-8 py-4"
              >
                Send Us A Message
              </Typography>
            </ListItem>
            <form className="flex flex-col gap-10 ">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border-2 border-gray-300 w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border-2 border-gray-300"
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border-2 border-gray-300"
              />
              <Button variant="contained" color="secondary" className="w-1/2">
                Send
              </Button>
            </form>
          </List>
        </Box>
      </Box>
    </main>
  );
}
