import Data from "./Data";

const CategoriesData = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10 ">
        <div className=" h-auto w-screen pl-20">
        <h1 className="text-2xl font-bold">Categories</h1>
        </div>
        
      {Data.map((data) => (
        <div key={data.id} id={data.id} className="relative h-32 category-item w-1/5 flex shadow-md cursor-pointer p-2 overflow-hidden  hover:bg-yellow-500">
          <img src={data.images} alt="" className="absolute inset-0 w-32 h-32 object-cover hover:skew-y-12 transform transition-transform duration-300 hover:scale-125 hover:rotate-5 " />
          <div className="flex flex-col ml-36">
            <h1 className="text-xl font-bold">{data.name}</h1>
            <h1 className="text-xl font-bold text-gray-500">{data.Products}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesData;
