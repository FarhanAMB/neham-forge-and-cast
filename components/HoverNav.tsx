import HoverMenu from "material-ui-popup-state/HoverMenu";
import Link from "next/link";
import { Button, Box } from "@mui/material";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";

const items = [
  {
    name: "G.I. Pipe Fitting",
    submenu: [
      {
        name: "item 1",
        link: "/item1",
      },
      {
        name: "item 2",
        link: "/item2",
      },
      {
        name: "item 3",
        link: "/item3",
      },
    ],
  },
  {
    name: "Scaffolding",
    submenu: [
      {
        name: "item 1",
        link: "/item1",
      },
      {
        name: "item 2",
        link: "/item2",
      },
      {
        name: "item 3",
        link: "/item3",
      },
    ],
  },
  {
    name: "Custom Forging",
    submenu: [
      {
        name: "item 1",
        link: "/item1",
      },
      {
        name: "item 2",
        link: "/item2",
      },
      {
        name: "item 3",
        link: "/item3",
      },
    ],
  },
  {
    name: "Custo S.G. Iron Casting",
    submenu: [
      {
        name: "item 1",
        link: "/item1",
      },
      {
        name: "item 2",
        link: "/item2",
      },
      {
        name: "item 3",
        link: "/item3",
      },
    ],
  },
  {
    name: "Custom C.I. Casting",
    submenu: [
      {
        name: "item 1",
        link: "/item1",
      },
      {
        name: "item 2",
        link: "/item2",
      },
      {
        name: "item 3",
        link: "/item3",
      },
    ],
  },
];

const HoverNav = () => {
  const popupState = usePopupState({
    variant: "popover",
  });
  return (
    <main>
      {items.map((item, index) => (
        <Button
          className="rounded-md mx-4"
          variant="text"
          sx={{ color: "secondary.main" }}
          {...bindHover(popupState)}
          size="small"
          key={index}
        >
          {item.name}
        </Button>
      ))}
      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Box>
          <ul className="list-disc list-inside hover:cursor-pointe ">
            {items[0].submenu.map((item, index) => (
              <Link href={item.link} key={index}>
                <li className="p-1 px-7 hover:cursor-pointer hover:bg-slate-100 ">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </Box>
      </HoverMenu>
    </main>
  );
};

export default HoverNav;
