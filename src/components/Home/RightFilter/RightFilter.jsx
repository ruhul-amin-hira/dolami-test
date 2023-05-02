import BaseFilter from "./BaseFilter";

let price = [
  {
    id: "Under $10",
    value: 9,
  },
  {
    id: "$10 to $20",
    value: 20,
  },
  {
    id: "$20 to $30",
    value: 30,
  },
];

let polygon = [
  {
    id: `Under &#9651;7500`,
    value: 7500,
  },
  {
    id: "&#9651;10000 to &#9651;20000",
    value: 20000,
  },
  {
    id: "&#9651;20000 to &#9651;30000",
    value: 30000,
  },
];

let autoUpload = [
  {
    id: "Supported",
    value: "Supported",
  },
  {
    id: "Unsupported",
    value: "Unsupported",
  },
];

const RightFilter = () => {
  return (
    <div className="pt-2 pl-4">
      <div>
        <h3 className="text-lg font-semibold">Category</h3>
        <ul className="pl-5">
          <li className="text-lg"> Full avatar</li>
          <li className="text-lg">Others</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Contents</h3>
        <div className="pl-5">
          <div className="flex">
            <input
              type="checkbox"
              id="VRChat(Quest)"
              name="VRChat(Quest)"
              value="VRChat(Quest)"
            />
            <div className="flex items-center">
              <label htmlFor="VRChat(Quest)" className="text-lg pl-1">
                VRChat(Quest)
              </label>
              <span className="circle bg-[#75DE73] ml-1">&nbsp;</span>
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              id="VRChat(PCVR)"
              name="VRChat(PCVR)"
              value="VRChat(PCVR)"
            />
            <div className="flex items-center">
              <label htmlFor="VRChat(PCVR)" className="text-lg pl-1">
                VRChat(PCVR)
              </label>
              <span className="circle bg-[#3CD4F5] ml-2">&nbsp;</span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="Others" name="Others" value="Others" />
            <label htmlFor="Others" className="text-lg pl-1">
              Others
            </label>
          </div>
        </div>
      </div>
      <BaseFilter name="Price" lists={price} />
      <BaseFilter name="Polygon amount" lists={polygon} />
      <BaseFilter name="Auto uploader support" lists={autoUpload} />
    </div>
  );
};

export default RightFilter;
