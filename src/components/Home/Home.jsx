import { products } from "../../utils/products";
import Card from "./Card";
import RightFilter from "./RightFilter/RightFilter";

const Home = () => {
  return (
    <div className="relative">
      <div className="flex 4xl:w-[1460px] 4xl:mx-auto">
        <div className="relative shrink  hidden xl:block basis-80 max-w-xs min-w-64">
          <div className="sticky top-[8%]">
            <div className="max-h-[90vh] overflow-y-scroll ">
              <RightFilter />
            </div>
          </div>
        </div>

        <div className="grow basis-[722px]  flex justify-center">
          <div className="pt-2 grid grid-cols-4 gap-2 pr-2">
            {products &&
              products.map((el, index) => {
                return <Card key={index} item={el} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
