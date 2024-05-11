import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FcLikePlaceholder } from "react-icons/fc";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const [showInsideHam, setShowInsideHam] = useState(false);
  const [sowpage, setSowPage] = useState(false);

  return (
    <div className="h-14 w-screen bg-slate-700 flex justify-around items-center mt-4 px-4 z-10">
      <div className="relative">
        <button
          className="h-14 w-44 font-bold text-xl border-black text-black flex flex-row justify-center align-middle  gap-2 bg-yellow-500 "
          onClick={() => setShowHamburger(!showHamburger)}
        >
          <span>
            <GiHamburgerMenu />
          </span>{" "}
          Categories
        </button>
        <ul
          className={`absolute left-0 mt-0 w-56 bg-white shadow-md rounded-md ${
            showHamburger ? "" : "hidden"
          }`}
        >
          <li
            className="font-bold border flex gap-24 hover:bg-yellow-500"
            onClick={() => setShowInsideHam(!showInsideHam)}
          >
            Dresses{" "}
            <span>
              <IoIosArrowForward className="text-black" />
            </span>
            <ul
              className={`absolute left-56 top-0 mt-0 w-36 bg-white shadow-md rounded-md ${
                showInsideHam ? "" : "hidden"
              }`}
            >
              <li className="font-bold border hover:bg-yellow-500">
                Mens Dresses
              </li>
              <li className="font-bold border hover:bg-yellow-500">
                Womens Dresses
              </li>
              <li className="font-bold border hover:bg-yellow-500">
                Baby Dresses
              </li>
            </ul>
          </li>
          <li className="font-bold border hover:bg-yellow-500">
            <a href="#">Shirts</a>
          </li>
          <li className="font-bold border hover:bg-yellow-500">
            <a href="#">Jeans</a>
          </li>
          <li className="font-bold border hover:bg-yellow-500">
            <a href="#">Sweamwear</a>
          </li>
          <li className="font-bold border hover:bg-yellow-500">
            <a href="#">Sleepwear</a>
          </li>
          <li className="font-bold border hover:bg-yellow-500">
            <a href="#">Sportwear</a>
          </li>
          <li className="font-bold border hover:bg-yellow-500">
            <a href="#">Jeans</a>
          </li>
          <li className="font-bold border hover:bg-yellow-500">
            <a href="#">Jumpsuits</a>
          </li>
          <li className="font-bold border hover:bg-yellow-500">
            <a href="#">Blazers</a>
          </li>
          <li className="font-bold border hover:bg-yellow-500">
            <a href="#">Jackets</a>
          </li>
          <li className="font-bold border hover:bg-yellow-500">
            <a href="#">Shoes</a>
          </li>
        </ul>
      </div>

      <ul className="flex align-middle justify-center gap-10 text-white">
        <li className="font-bold hover:text-yellow-500 cursor-pointer">Home</li>
        <li className="font-bold hover:text-yellow-500 cursor-pointer ">
          Shop
        </li>
        <li className="font-bold hover:text-yellow-500 cursor-pointer ">
          Shop Detail
        </li>
        <li
          className="font-bold  flex justify-center align-middle gap-2  hover:text-yellow-500 cursor-pointer  "
          onClick={() => setSowPage(!sowpage)}
        >
          Pages <span className=" text-white flex justify-center align-middle pt-1 hover:text-yellow-500">
            <IoIosArrowForward className="text-white" />
          </span>
        
          <ul
            className={`absolute right-1/3 top-44 mt-2 w-36 bg-white text-black shadow-md rounded-md ${
              sowpage ? "" : "hidden"
            }`}
          >
            <li className="font-bold border hover:bg-yellow-500">
             Shoping Cart 
            </li>
            <li className="font-bold border hover:bg-yellow-500">
              Checkout
            </li>
            
          </ul>
        </li>
        <li className="font-bold hover:text-yellow-500 cursor-pointer ">
          Contact
        </li>
      </ul>

      <ul className="flex align-middle justify-center gap-10 text-white">
        <li className=" font-bold text-2xl" >
      
          <FcLikePlaceholder className="text-yellow-500 text-2xl" />
          
        </li>
        <li className=" font-bold text-2xl">
          <IoCartOutline className="text-yellow-500 text-2xl" /> 
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

