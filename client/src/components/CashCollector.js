import { useEffect, useState } from "react";
import { useDispatch,  useSelector } from "react-redux";
import { addBy } from "../slices/cashSlice";
import { userCashAdd } from "../slices/userSlice";

function CashCollector({ amount, interval }) {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const user  = useSelector(state => state.user)
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
      dispatch(userCashAdd(amount));
      setProgress(0);
      fetch('/users', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userId: user.id,
            cash: amount,
            type: 'add'
        })
      })
      .then(r => r.json())
      .then(data => console.log(data))
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