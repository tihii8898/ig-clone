import { BsHeart, BsPlusSquare } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { TbBrandMessenger } from "react-icons/tb";

export const ROUTE_LIST = [
  {
    icon: <GrHomeRounded />,
    title: "Home",
  },
  {
    icon: <FiSearch />,
    title: "Search",
  },
  {
    icon: <MdOutlineExplore />,
    title: "Explore",
  },
  {
    icon: <TbBrandMessenger />,
    title: "Messages",
  },
  {
    icon: <BsHeart />,
    title: "Notifications",
  },
  {
    icon: <BsPlusSquare />,
    title: "Create",
  },
  {
    icon: <CgProfile />,
    title: "Profile",
  },
];
