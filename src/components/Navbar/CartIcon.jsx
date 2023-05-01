import IconWithCount from "./IconWithCount";
import { MdOutlineShoppingCart } from "react-icons/md";

const CartIcon = () => {
  return (
    <IconWithCount count={0}>
      <MdOutlineShoppingCart />
    </IconWithCount>
  );
};

export default CartIcon;
