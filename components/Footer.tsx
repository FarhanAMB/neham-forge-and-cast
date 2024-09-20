import { Box, Button, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <div>
      <Box
        sx={{
          margin: 15,
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxHeight: 350,
        }}
        bgcolor={"primary.main"}
      >
        <Typography
          sx={{ fontWeight: 600, padding: 10, textAlign: "center" }}
          variant="h1"
        >
          Neham Forge and Cast
        </Typography>
        <div className="flex w-full justify-center pb-20">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "secondary.main",
              padding: 2,
              paddingX: 10,
              marginX: 5,
              color: "info.main",
            }}
            className="text-xl"
          >
            Request a Quote
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "info.light",
              color: "info.light",
              padding: 2,
              paddingX: 10,
              marginX: 5,
            }}
            className="text-xl"
            color="info"
          >
            Product Range
          </Button>
        </div>
      </Box>

      {/* // */}

      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "secondary.main",
            padding: 4,
            color: "info.main",
          }}
        >
          <div>
            <Typography
              variant="h6"
              className="p-3"
              sx={{ fontWeight: 600, textDecoration: "underline" }}
            >
              Contact info
            </Typography>
            <ul>
              <li className="p-3">
                <Typography>
                  <PlaceIcon fontSize="small" /> 1234 Street Name, City Name,
                  India
                </Typography>
              </li>
              <li className="p-3">
                <Typography>
                  <LocalPhoneIcon fontSize="small" /> +91 9488390300
                </Typography>
              </li>
              <li className="p-3">
                <Typography>
                  <EmailIcon fontSize="small" /> abc@gmail.com
                </Typography>
              </li>
            </ul>
          </div>
          <div>
            <Typography
              variant="h6"
              className="p-3"
              sx={{ fontWeight: 600, textDecoration: "underline" }}
            >
              Resources
            </Typography>
            <ul>
              <li className="p-3">
                <Typography>FAQ</Typography>
              </li>
              <li className="p-3">
                <Typography>Glossary</Typography>
              </li>
              <li className="p-3">
                <Typography>Privacy Policy</Typography>
              </li>
              <li className="p-3">
                <Typography>Terms & Conditions</Typography>
              </li>
            </ul>
          </div>
        </Box>
      </Box>
    </div>
  );
}
