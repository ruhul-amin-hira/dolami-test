import { BsCart3, BsStarFill, BsHeart } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { RxUpload } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`${id}`);
  };
  return (
    <div className="cursor-pointer" onClick={() => clickHandler(item.id)}>
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={`Avatar Pictures/${item.img}`}
          alt={item.img}
          loading="lazy"
        />
        <div className="absolute top-[3%] right-[4%] flex bg-[#4C45F6] items-center px-2 py-1 rounded-md cursor-pointer">
          <BsCart3 className="text-white" />
          <span className="text-white font-semibold text-[12px]">Add</span>
        </div>
      </div>
      <div className="py-1 px-4">
        <h1 className="text-xl leading-[22px]">{item.name}</h1>
        <div className="pt-1 flex items-center">
          <div className="flex pr-4 text-[#F9AE3F] gap-1">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
          <p className="text-gray-800">
            {item.rating} & {item.like}Likes
          </p>
          <BsHeart className="ml-auto" />
        </div>
        <div className="flex items-center">
          <FaUserCircle className="text-2xl mr-2" />
          <p className="text-gray-800">{item.user}</p>
        </div>
        <div className="flex items-end">
          <span className="text-[12px] leading-[24px]">$</span>
          <h2 className="text-2xl">{item.price.toFixed(2)}</h2>
        </div>
        <div className="flex items-center">
          <span className="big-circle bg-[#3CD4F5]">&nbsp;</span>
          <p className="pl-2 text-black">
            {" "}
            <span className="uppercase">{item.for}</span> Only
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-medium leading-[20px] pr-4">
            Auto upload service ready, you can use this avatar within 24 hours.
          </p>
          <RxUpload className="text-3xl text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default Card;
