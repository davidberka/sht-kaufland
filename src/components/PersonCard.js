const PersonCard = ({ imgSrc, name, job, desc }) => {
  return (
    <div className="shadow-sm">
      <div className="pl-6 relative">
        <div className="w-full h-5/6 bg-white absolute bottom-0 left-0 z-n1" />
        <div className="flex items-end">
          <img className="w-28" src={imgSrc} alt="" />
          <div
            style={{
              borderBottom: "30px solid red",
              borderRight: "30px solid transparent",
              width: "0",
              height: "0",
            }}
          />
        </div>
      </div>
      <div className="bg-white p-6 pt-2">
        <div className="mb-2">
          <h4 className="font-bold text-2xl text-red-main">{name}</h4>
          <span className="font-bold text-sm text-blue-main">{job}</span>
        </div>
        <p className="pt-2 border-t">{desc}</p>
      </div>
    </div>
  );
};

export default PersonCard;
