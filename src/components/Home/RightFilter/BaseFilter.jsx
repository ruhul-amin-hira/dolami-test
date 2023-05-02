import parse from "html-react-parser";

const BaseFilter = ({ name, lists }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="pl-5">
        {lists &&
          lists.map((el, index) => {
            return (
              <div key={el + index}>
                <input
                  type="checkbox"
                  id={el.id}
                  name={el.id}
                  value={el.value}
                />
                <label htmlFor={el.id} className="text-lg pl-1 cursor-pointer">
                  {parse(el.id)}
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BaseFilter;
