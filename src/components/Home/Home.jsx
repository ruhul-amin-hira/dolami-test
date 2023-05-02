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

        <div className="grow basis-[722px]  flex justify-center bg-blue-300">
          <h1>Main page</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
