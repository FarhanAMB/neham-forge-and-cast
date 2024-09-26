import Pcarousel from "@/components/home/Pcarousel";
import { Button } from "@mui/material";

export default function Products() {
  return (
    <main className="p-4">
      <h1 className="text-5xl text-black mb-8">Our Products</h1>
      <div className="flex justify-between text-black">
        <div className="w-3/12 ">
          <p className="text-gray-600">
            Neham Forging and Casting o􀆯ers comprehensive solutions tailored to
            meet the diverse needs of our clients. Our expertise spans across
            precision forging, advanced casting, and machining, ensuring
            high-quality results for a wide range of industries. We specialize
            in creating custom components with meticulous attention to detail,
            leveraging advanced technology and robust quality control processes.
            Our commitment to innovation and excellence positions Neham Forging
            and Casting as a trusted partner dedicated to delivering superior
            products and exceptional value to our customers.
          </p>
          <Button
            variant="outlined"
            className="mt-5"
            sx={{
              backgroundColor: "secondary.main",
              color: "info.main",
            }}
          >
            Explore &rarr;
          </Button>
        </div>
        <div className="w-8/12">
          <Pcarousel />
        </div>
      </div>
    </main>
  );
}
