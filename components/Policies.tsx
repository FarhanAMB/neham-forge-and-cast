import { Avatar, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import { Card, CardContent, Box } from "@mui/material";

export default function Policies() {
  return (
    <div className="mt-12 text-black">
      <p className="text-center text-5xl font-medium mb-8">Our Policies</p>
      <div className="flex ">
        <Card
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            borderRadius: "10px",
            borderColor: "primary.main",
            borderWidth: 1,
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center" p={2}>
            <Avatar sx={{ width: 50, height: 50, bgcolor: "white" }}>
              <EditNoteIcon sx={{ color: "secondary.main" }} fontSize="large" />
            </Avatar>
          </Box>
          <CardContent sx={{ marginTop: -2 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Raw Material
            </Typography>
            <Typography variant="body2" className="mt-2">
              We are committed to delivering high-quality products and services
              that meet or exceed customer expectations. We strive to
              continuously improve our processes and systems to ensure
              consistent quality and reliability in all our products and
              services.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            borderRadius: "10px",
            borderColor: "primary.main",
            borderWidth: 1,
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center" p={2}>
            <Avatar sx={{ width: 50, height: 50, bgcolor: "white" }}>
              <BorderColorIcon
                sx={{ color: "secondary.main" }}
                fontSize="large"
              />
            </Avatar>
          </Box>
          <CardContent sx={{ marginTop: -2 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Production
            </Typography>
            <Typography variant="body2" className="mt-2">
              We are committed to delivering high-quality products and services
              that meet or exceed customer expectations. We strive to
              continuously improve our processes and systems to ensure
              consistent quality and reliability in all our products and
              services.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            borderRadius: "10px",
            borderColor: "primary.main",
            borderWidth: 1,
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center" p={2}>
            <Avatar sx={{ width: 50, height: 50, bgcolor: "white" }}>
              <EngineeringRoundedIcon
                sx={{ color: "secondary.main" }}
                fontSize="large"
              />
            </Avatar>
          </Box>
          <CardContent sx={{ marginTop: -2 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Safety
            </Typography>
            <Typography variant="body2" className="mt-2">
              We are committed to delivering high-quality products and services
              that meet or exceed customer expectations. We strive to
              continuously improve our processes and systems to ensure
              consistent quality and reliability in all our products and
              services.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            borderRadius: "10px",
            borderColor: "primary.main",
            borderWidth: 1,
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center" p={2}>
            <Avatar sx={{ width: 50, height: 50, bgcolor: "white" }}>
              <CheckCircleOutlineRoundedIcon
                sx={{ color: "secondary.main" }}
                fontSize="large"
              />
            </Avatar>
          </Box>
          <CardContent sx={{ marginTop: -2 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Quality
            </Typography>
            <Typography variant="body2" className="mt-2">
              We are committed to delivering high-quality products and services
              that meet or exceed customer expectations. We strive to
              continuously improve our processes and systems to ensure
              consistent quality and reliability in all our products and
              services.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            borderRadius: "10px",
            borderColor: "primary.main",
            borderWidth: 1,
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center" p={2}>
            <Avatar sx={{ width: 50, height: 50, bgcolor: "white" }}>
              <LocalShippingRoundedIcon
                sx={{ color: "secondary.main" }}
                fontSize="large"
              />
            </Avatar>
          </Box>
          <CardContent sx={{ marginTop: -2 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Delivery
            </Typography>
            <Typography variant="body2" className="mt-2">
              We are committed to delivering high-quality products and services
              that meet or exceed customer expectations. We strive to
              continuously improve our processes and systems to ensure
              consistent quality and reliability in all our products and
              services.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
