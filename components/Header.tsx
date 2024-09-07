import { Button } from "@mui/material";

export default function Header() {
  const navItems = [
    "Home",
    "About Us",
    "Infrastructure",
    "Our Capabilities",
    "Contact Us",
  ];
  return (
    <main>
      <div className="flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="247"
          height="40"
          viewBox="0 0 247 40"
          fill="none"
          className=""
        >
          <path d="M0 0H247L209.854 40H0V0Z" fill="#6599DC" />
        </svg>
        <div>
          <ul className=" px-1 my-2 flex-row flex">
            {navItems.map((item, index) => (
              <li key={index} className=" rounded-md mx-6 ">
                <Button href={`/${item.toLowerCase()}`} color="info">
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="962"
        height="40"
        viewBox="0 0 962 40"
        fill="none"
        className="float-right"
      >
        <path d="M962 40H-2.67029e-05L35.0924 0H962V40Z" fill="#6599DC" />
      </svg>
    </main>
  );
}
