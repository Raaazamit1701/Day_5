import { useState } from "react";

const images = [
  "https://demo.htmlcodex.com/1479/online-shop-website-template/img/carousel-2.jpg",
  "https://demo.htmlcodex.com/1479/online-shop-website-template/img/carousel-1.jpg",
  "https://demo.htmlcodex.com/1479/online-shop-website-template/img/carousel-3.jpg",
];

const Body = () => {
  const [index, setIndex] = useState(0);
  const [buttonStates, setButtonStates] = useState([false, false, false]);

  function increment() {
    setIndex(images.length - 1);
  }

  function decrement() {
    setIndex(0);
  }

  function midImage() {
    setIndex(1);
  }

  function handleButtonClick(buttonIndex) {
    setButtonStates((prevState) =>
      prevState.map((state, index) => (index === buttonIndex ? !state : state))
    );
  }

  return (
    <div  >
      <div className="relative m-10 flex align-middle justify-center  z-0  ">
        <img src={images[index]} alt="" className="h-2/3 block w-2/3" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className= "h-18 w-44 bg-yellow-500 text-white text-xl font-bold hover:bg-slate-500 py-2 px-4 border border-blue-700 rounded">
            Shop Now
          </button>
        </div>
        <div className="absolute bottom-20 left-10 right-32 flex justify-center gap-2">
          <button
            className={`h-5 border-black bg-yellow-500 mt-9 ${
              buttonStates[0] ? "w-10" : "w-5"
            }`}
            onClick={() => {
              decrement();
              handleButtonClick(0);
            }}
          ></button>
          <button
            className={`h-5 border-black bg-yellow-500 mt-9  ${
              buttonStates[1] ? "w-10" : "w-5"
            }`}
            onClick={() => {
              midImage();
              handleButtonClick(1);
            }}
          ></button>
          <button
            className={`h-5 border-black bg-yellow-500 mt-9  ${
              buttonStates[2] ? "w-10" : "w-5"
            }`}
            onClick={() => {
              increment();
              handleButtonClick(images.length);
            }}
          ></button>
        </div>
      </div>

<div>
  
</div>

    </div>
  );
};

export default Body;
