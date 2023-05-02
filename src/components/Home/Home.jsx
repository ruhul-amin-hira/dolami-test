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

        <div className="grow basis-[722px] xl:px-0 px-4">
          <div className="flex justify-between items-center px-2 pt-2">
            <h1 className="text-3xl">All items</h1>
            <div className="pr-2">
              <select name="Sort" id="Sort" className="p-1">
                <option value="Featured">Featured</option>
                <option value="Price:Low-to-hight">Price: Low to High</option>
                <option value="Price:High-to-low">Price: High to Low</option>
                <option value="New">New</option>
              </select>
            </div>
          </div>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 pr-2">
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
