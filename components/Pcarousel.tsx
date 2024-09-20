"use client";

import Carousel from "react-material-ui-carousel";

import { Card, CardMedia, Typography } from "@mui/material";

import { Grid2 } from "@mui/material";

const Example = () => {
  return (
    <div style={{ marginTop: "10px", color: "#494949" }}>
      <Carousel
        className="Example"
        next={(now: any, previous: any) =>
          console.log(
            `Next User Callback: Now displaying child ${now}. Previously displayed child ${previous}`
          )
        }
        prev={(now, previous) =>
          console.log(
            `Prev User Callback: Now displaying child ${now}. Previously displayed child ${previous}`
          )
        }
        onChange={(now, previous) =>
          console.log(
            `OnChange User Callback: Now displaying child ${now}. Previously displayed child ${previous}`
          )
        }
        navButtonsProps={{
          style: { backgroundColor: "cornflowerblue", borderRadius: 50 },
        }}
        navButtonsWrapperProps={{ style: { bottom: "0", top: "unset" } }}
        navButtonsAlwaysInvisible={true}
        indicatorContainerProps={{
          style: { margin: "20px", alignContent: "flex-start" },
        }}
        indicatorIconButtonProps={{
          style: { zIndex: 5, padding: 3, float: "left" },
        }}
        duration={500}
        animation="slide"
        stopAutoPlayOnHover={false}
      >
        {items.map((item, index) => {
          return <Banner item={item} key={index} />;
        })}
      </Carousel>
      <br />
    </div>
  );
};

type Item = {
  Items: { Name: string; Image: string }[];
};

interface BannerProps {
  item: Item;
  length?: number;
}

const Banner = (props: BannerProps) => {
  const mediaLength = 3;

  const items = [];

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid2 size={4} key={item.Name} bgcolor={"#ededed"}>
        <CardMedia
          className="Media "
          image={item.Image}
          title={item.Name}
          sx={{
            height: 400,
            alignContent: "end",
            color: "white",
            borderRadius: 3,
          }}
        >
          <Typography
            className="bg-black p-2 bg-opacity-30"
            sx={{ borderRadius: 3 }}
          >
            {item.Name}
          </Typography>
        </CardMedia>
      </Grid2>
    );

    items.push(media);
  }

  return (
    <Card className="Banner" color="#ededed" sx={{ borderRadius: 3 }}>
      <Grid2
        container
        size={"auto"}
        spacing={3}
        className="BannerGrid"
        bgcolor={"#ededed"}
      >
        {items}
      </Grid2>
    </Card>
  );
};

const items: Item[] = [
  {
    Items: [
      {
        Name: "G.I. Pipe Fitting",
        Image: "/carousel2-1.jpg",
      },
      {
        Name: "Scaffolding",
        Image: "/carousel2-2.jpg",
      },
      {
        Name: "Custom Forging",
        Image: "/carousel2-3.jpg",
      },
    ],
  },
  {
    Items: [
      {
        Name: "Custo S.G. Iron Casting",
        Image: "/carousel2-4.jpg",
      },
      {
        Name: "Custom C.I. Casting",
        Image: "/carousel2-5.jpg",
      },
      {
        Name: "G.I. Pipe Fitting",
        Image: "/carousel2-2.jpg",
      },
    ],
  },
  // {
  //   Items: [
  //     {
  //       Name: "Custom Forging",
  //       Image: "/mountain.jpg",
  //     },
  //     {
  //       Name: "Custo S.G. Iron Casting",
  //       Image: "/mountain.jpg",
  //     },
  //     {
  //       Name: "Custom C.I. Casting",
  //       Image: "/mountain.jpg",
  //     },
  //   ],
  // },
  // {
  //   Items: [
  //     {
  //       Name: "Custo S.G. Iron Casting",
  //       Image: "/mountain.jpg",
  //     },
  //     {
  //       Name: "Custom C.I. Casting",
  //       Image: "/mountain.jpg",
  //     },
  //     {
  //       Name: "G.I. Pipe Fitting",
  //       Image: "/mountain.jpg",
  //     },
  //   ],
  // },
  // {
  //   Items: [
  //     {
  //       Name: "Custom C.I. Casting",
  //       Image: "/mountain.jpg",
  //     },
  //     {
  //       Name: "G.I. Pipe Fitting",
  //       Image: "/mountain.jpg",
  //     },
  //     {
  //       Name: "Scaffolding",
  //       Image: "/mountain.jpg",
  //     },
  //   ],
  // },
];

export default Example;
