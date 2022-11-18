import Image from "next/image";
import Link from "next/link";
import { IconContext } from "react-icons";
import Logo from "../../public/logo.svg";
import { ROUTE_LIST } from "./routes";
export const LeftNav = () => {
  return (
    <div className="w-[244px] p-6">
      <div className="py-5 mb-5">
        <Link href="/" className="w-full">
          <Image priority src={Logo} alt="ig-logo" width={103} height={92} />
        </Link>
      </div>
      {ROUTE_LIST.map((item) => (
        <div className="flex flex-row items-center gap-4 py-5">
          <IconContext.Provider value={{ className: "text-2xl" }}>
            {item.icon}
          </IconContext.Provider>
          <p className="text-md">{item.title}</p>
        </div>
      ))}
    </div>
  );
};
