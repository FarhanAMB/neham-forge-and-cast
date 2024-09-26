import { Button, CardActions, CardMedia, Typography } from "@mui/material";
import { Card, CardContent } from "@mui/material";

export default function Policies() {
  return (
    <div className="mt-32 text-black">
      <p className="text-center text-5xl font-medium mb-10">Stay Updated</p>
      <div className="flex justify-around">
        <Card
          raised
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <CardMedia sx={{ height: 200, width: 310 }} image="/image.png" />
          <Typography variant="caption" sx={{ textAlign: "left" }}>
            Sep 10, 2024
          </Typography>
          <CardContent sx={{ marginTop: -2, width: 250 }}>
            <Typography variant="h6" className="mt-12">
              What is drop hammer forging?
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              className="mt-5"
              sx={{
                backgroundColor: "secondary.main",
                color: "info.main",
              }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
        <Card
          raised
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <CardMedia sx={{ height: 200, width: 310 }} image="/image.png" />
          <Typography variant="caption" sx={{ textAlign: "left" }}>
            Sep 10, 2024
          </Typography>
          <CardContent sx={{ marginTop: -2, width: 250 }}>
            <Typography variant="h6" className="mt-12">
              What is drop hammer forging?
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              className="mt-5"
              sx={{
                backgroundColor: "secondary.main",
                color: "info.main",
              }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
        <Card
          raised
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <CardMedia sx={{ height: 200, width: 310 }} image="/image.png" />
          <Typography variant="caption" sx={{ textAlign: "left" }}>
            Sep 10, 2024
          </Typography>
          <CardContent sx={{ marginTop: -2, width: 250 }}>
            <Typography variant="h6" className="mt-12">
              What is drop hammer forging?
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              className="mt-5"
              sx={{
                backgroundColor: "secondary.main",
                color: "info.main",
              }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
