
import { CiSearch } from "react-icons/ci";
const Logo = () => {
  return (
    <div className=" flex justify-around align-middle mt-2">
       <div className="flex items-center ">
       <span className=" bg-black h-10 w-24 text-yellow-500 text-2xl font-bold  text-center flex align-middle justify-center ">MULTI</span> <span className=" bg-yellow-500 h-10 w-20 text-black text-2xl font-bold text-center flex align-middle justify-center ">SHOP</span>
    </div>

      <div className="flex items-center">
      <input type="text" placeholder="Search" className=" h-10 w-96 border px-4 py-2" /><span className=" h-10 w-12 border flex justify-center align-middle "><CiSearch className=" font-bolder text-3xl text-yellow-500 " /></span>
    </div>


    <div className="flex items-center">
      <div className="mr-4">
        <p className="text-xl font-bold">Phone:</p>
        <p className="text-xl">123-456-7890</p>
      </div>
      <div>
        <p className="text-xl font-bold">Email:</p>
        <p className="text-xl">info@multishop.com</p>
      </div>
    </div>
    </div>
  )
}

export default Logo
