const IconWithCount = ({ children, count }) => {
  return (
    <div className="bg-[#34353A] px-2 py-2 rounded-lg relative cursor-pointer mt-auto mb-[5px]">
      <div className="text-white text-[22px]">{children}</div>
      <div className="w-5 h-5 rounded-full bg-[#DF4949] flex items-center justify-center absolute top-[-12px] right-[-8px]">
        <p className="truncate max-w-[20px] text-white text-[12px]">{count}</p>
      </div>
    </div>
  );
};

export default IconWithCount;
