"use client";

import Carousel from "react-material-ui-carousel";
import Image from "next/image";

import { Card } from "@mui/material";

const Example = () => {
  return (
    <div>
      <Carousel
        className="mb-1"
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
        indicatorContainerProps={{
          style: { margin: "0px", justifyContent: "flex-start" },
        }}
        indicatorIconButtonProps={{
          style: { zIndex: 5, padding: 3, justifySelf: "flex-start" },
        }}
        autoPlay={true}
        animation="slide"
        height={500}
      >
        {items2.map((item, index) => {
          return <Banner source={item} key={index} />;
        })}
      </Carousel>
      <br />
    </div>
  );
};

interface BannerProps2 {
  source: string;
}

const Banner = (props: BannerProps2) => {
  const mediaLength = 1;

  const items = [];

  for (let i = 0; i < mediaLength; i++) {
    // const item = props.item.Items[i];

    const media = (
      <div>
        <Image src={props.source} alt={"Neham Forge and Cast"} fill />
      </div>
    );

    items.push(media);
  }

  return <Card raised>{items}</Card>;
};

const items2: string[] = [
  "/carousel1-1.jpg",
  "/carousel1-2.jpg",
  "/carousel1-3.jpg",
];

export default Example;
