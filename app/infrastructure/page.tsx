import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import SubHeaderBox from "@/components/SubHeaderBox";
import Image from "next/image";

export default function TitlebarImageList() {
  return (
    <main>
      <SubHeaderBox title="Infrastructure" />
      <ImageList className="m4 p-28" gap={50} rowHeight={300}>
        {newData.map((item) => (
          <ImageListItem key={item.img}>
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="rounded-lg"
            />
            <ImageListItemBar
              title={item.title}
              sx={{
                "& .MuiImageListItemBar-title": {
                  fontSize: 36,
                  paddingY: 10,
                  color: "secondary.main",
                },
              }}
              className="h-1/5 rounded-lg"
            >
              test
            </ImageListItemBar>
          </ImageListItem>
        ))}
      </ImageList>
    </main>
  );
}

const newData = [
  {
    img: "/carousel1-1.jpg",
    title: "Cutting",
  },
  {
    img: "/carousel1-2.jpg",
    title: "Testing",
  },
  {
    img: "/carousel1-3.jpg",
    title: "Heating",
  },
  {
    img: "/carousel2-1.jpg",
    title: "Forging",
  },
  {
    img: "/carousel2-2.jpg",
    title: "Blasting",
  },
  {
    img: "/carousel2-3.jpg",
    title: "Dispatch",
  },
  {
    img: "/carousel2-4.jpg",
    title: "Blowing",
  },
  {
    img: "/carousel2-5.jpg",
    title: "Smithing",
  },
];
