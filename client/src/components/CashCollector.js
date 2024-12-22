import { useEffect, useState } from "react";
import { useDispatch,  useSelector } from "react-redux";
import { addBy } from "../slices/cashSlice";
import { userCashAdd } from "../slices/userSlice";

function CashCollector({ amount, interval, enclosure }) {
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
        return Math.min(currentProgress, 100);
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
      .then(data => console.log('bought'))
    }, interval);

    return () => {
      clearInterval(progressId);
      setProgress(0)
      clearInterval(intervalId);
    };
  }, [dispatch, interval, amount, enclosure.num_animals, user.id]);

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