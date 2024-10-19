import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "./features/gitUserSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.app;
  });
  if(data.loading){
    return <h1>Loading...</h1>  
  }
  if(data.error !=null){
    return <h1>Error: {data.error}</h1>  
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 space-y-10">
        <h1 className="text-red-500 font-bold text-4xl text-cente">App</h1>
        <button
          onClick={() => dispatch(getAllData())}
          className="text-black font-semibold py-3 text-xl  bg-orange-400 rounded-md p-4"
        >
          Get GitHub users
        </button>
        <ul className="grid grid-cols-5 gap-4  border-orange-400 p-5 border-[4px] rounded-md">
          {data.users.map((ele) => (
            <li className="text-red-600" key={ele.id}>
              {ele.login}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
