import { useState } from "react";

const Notes = () => {
  const [text, setText] = useState("");
  const [time, setTime] = useState(0);
  const [alldata, setAllData] = useState([]);

  function incrementTime(id) {
    const updatedData = alldata.map((e, idx) => {
      if (id === idx) {
        return { ...e, t: e.t + 1 };
      }
      return e;
    });
    setAllData(updatedData);
  }

  function decrementTime(id){

    const updateData = alldata.map((e,idx)=>{
        if(e.t>0){
        if(idx==id) return {...e,t:e.t-1};
        }
        return e;
    })
    setAllData(updateData);
  }

  const saveData = () => {
    const data = {
      note: text,
      t: parseInt(time),
    };
    // console.log(data);
    setAllData([...alldata, data]);
    setText("");
    setTime("");
  };

  return (
    <>
      <h1 className=" text-center m-10 font-mono font-bold">
        Geekster Education Planner
      </h1>
      <input
        type="text"
        placeholder="text.."
        className=" border border-black m-5"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="hrs.."
        className=" border border-black m-5 w-[70px]"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      <button
        className=" bg-blue-800 text-center text-white w-[100px] rounded-lg cursor-pointer "
        onClick={saveData}
      >
        Add
      </button>
      <div>
        {alldata.map((e, idx) => {
          //   console.log(idx);
          return (
            <>
              <div className=" flex  items-center  " key={idx}>
                <p className=" m-2">
                  {e.note} - {e.t} hours..
                </p>
                <button
                  className=" bg-green-800 text-white text-center w-[40px] m-2"
                  onClick={(key) => {
                    incrementTime(idx);
                  }}
                >
                  +
                </button>
                <button
                  className=" bg-red-800 text-white text-center w-[40px] m-2 "
                  onClick={() => decrementTime(idx)}
                >
                  -
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
