import logo from "./../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiStar,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

const Header = () => {
    const [toggle,setToggle] = useState(false)
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCHLIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-20 object-cover md:w-[115px]" />
        <div className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden items-center gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.name} name={""} Icon={item.icon} />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 bg-[#121212] border border-gray-700 px-4 flex justify-start flex-col py-3 rounded">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        key={item.name}
                        toggleClassName="mb-2 last:mb-0"
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt="Avatar"
        className="w-10 rounded-full"
      />
    </div>
  );
};

export default Header;
