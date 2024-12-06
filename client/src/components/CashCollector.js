import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBy } from "../slices/cashSlice";

function CashCollector({ amount, interval }) {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = 10; 
    const steps = interval / progressInterval; 

    let currentProgress = 0;

    const progressId = setInterval(() => {
      setProgress((prevProgress) => {
        currentProgress = prevProgress + (100 / steps);
        return currentProgress;
      });
    }, progressInterval);

    const intervalId = setInterval(() => {
      dispatch(addBy(amount));
      setProgress(0); 
    }, interval);

    return () => {
      clearInterval(progressId);
      clearInterval(intervalId);
    };
  }, [dispatch, interval, amount]);

  return (
    <div>
      <div style={{ width: "100%", backgroundColor: "#ccc" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "20px",
            backgroundColor: "green",
          }}
        ></div>
      </div>
    </div>
  );
}

export default CashCollector;




// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addBy } from "../slices/cashSlice";

// function CashCollector({amount, interval}){
//     const dispatch = useDispatch()

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//           dispatch(addBy(amount)); 
//         }, interval);
    
//         return () => clearInterval(intervalId);
//       }, [dispatch]);

//     return(
//         <div>

//         </div>
//     )
// }

// export default CashCollector