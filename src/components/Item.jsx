import { useEffect } from "react";
import { useState } from "react";
import { BsHeart, BsStarFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { RxUpload } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import Button from "./Button";

const Item = () => {
  const [loading, setLoading] = useState(true);
  const [find, setFind] = useState(false);
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    products &&
      products.map((el) => {
        if (el.id == id) {
          setLoading(false);
          setFind(true);
          setItem(el);
        }
      });
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-[80vh]">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!find) {
    return (
      <div className="flex items-center justify-center w-full min-h-[80vh]">
        <h1>No item found</h1>
      </div>
    );
  }
  return (
    <div className="container p-4 mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="rounded-xl overflow-hidden">
          <img
            src={`Avatar Pictures/${item.img}`}
            alt={item.img}
            loading="lazy"
          />
        </div>
        <div>
          <div className="py-1 px-4">
            <h1 className="md:text-3xl text-xl">{item.name}</h1>
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
            <div className="flex justify-between items-center">
              <div className="py-2">
                <h2 className="text-lg">Price:</h2>
                <div className="flex items-end">
                  <span className="text-[12px] leading-[24px]">$</span>
                  <h2 className="text-2xl">{item.price.toFixed(2)}</h2>
                </div>
              </div>

              <div className="flex items-center">
                <span className="big-circle bg-[#3CD4F5]">&nbsp;</span>
                <p className="pl-2 text-black">
                  {" "}
                  <span className="uppercase">{item.for}</span> Only
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <p className="font-medium leading-[20px] pr-4">
                Auto upload service ready, you can use this avatar within 24
                hours.
              </p>
              <RxUpload className="text-3xl text-gray-800" />
            </div>
          </div>
          <div className="p-4">
            <div>
              <h2 className="text-lg mb-6">Quantity:</h2>
              <div className="text-2xl text-center">
                <span
                  onClick={decreaseQuantity}
                  className="cursor-pointer px-4 py-1 bg-indigo-700 text-white"
                >
                  -
                </span>
                <span className="mx-4 px-4 py-1 border-[1px] border-gray-700 ">
                  {quantity}
                </span>
                <span
                  onClick={increaseQuantity}
                  className="cursor-pointer px-4 py-1 bg-indigo-700 text-white"
                >
                  +
                </span>
              </div>
            </div>
            <div className="pt-8 flex gap-4 items-center">
              <div className="basis-2/4">
                <Button>
                  <h1>Add to cart</h1>
                </Button>
              </div>
              <div className="basis-2/4">
                <Button>
                  <h1>Buy Now</h1>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
