import FeatureData from "./FeaturData";

const FeatureProducts = () => {
    console.log(FeatureData);
  return (
    <div className=" mt-14 mb-10" >
      <h1 className=" text-2xl font-bold ">Feature Data</h1>
      <div className=" flex flex-wrap justify-center align-middle gap-10">
        {FeatureData.map((data, index) => (
          <div key={index} className="relative h-44 category-item w-1/3 flex shadow-md cursor-pointer p-2 overflow-hidden  hover:bg-yellow-500">
            <img src={data.img} alt={data.title}  className="absolute inset-0 w-44 h-44 object-cover hover:skew-y-12 transform transition-transform duration-300 hover:scale-125 hover:rotate-5 " />
            <div className="flex flex-wrap flex-col ml-56">
            <h1 >{data.title}</h1>
            <h2 >{data.reviews}</h2>
            <h3 >{data.company}</h3>
            <h4 >{data.prevPrice}</h4>
            <h4 >{data.newPrice}</h4>
            <h5 >{data.color}</h5>
            <h6 >{data.category}</h6>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
