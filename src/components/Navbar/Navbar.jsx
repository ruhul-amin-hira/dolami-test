import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import NotificationIcon from "./NotificationIcon";
import CartIcon from "./CartIcon";
import UserIcon from "./UserIcon";

const Navbar = () => {
  return (
    <div className="px-[16px] h-[60px] nav-bg w-full flex items-center justify-between fixed z-10">
      <div className="basis-56">
        <Link to="/">
          <div className="max-w-[180px]">
            <img
              src="/logo_avatown_manual_1_basi_inverse.png"
              alt="avatown logo"
            />
          </div>
        </Link>
      </div>
      <div className="hidden lg:flex items-center justify-between basis-2/3 grow">
        <div>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg underline text-white font-medium underline-offset-4"
          >
            Go to Marketpage
          </a>
        </div>
        <div className="basis-2/5">
          <div className="bg-white flex items-center px-2 py-1 rounded-lg ">
            <input type="text" className="grow" />
            <RiSearchLine className="text-[#6A6A6A] text-[22px]" />
          </div>
        </div>
      </div>
      <div className="h-full flex pl-8 justify-between gap-[30px]">
        <NotificationIcon />
        <CartIcon />
        <UserIcon />
      </div>
    </div>
  );
};

export default Navbar;
