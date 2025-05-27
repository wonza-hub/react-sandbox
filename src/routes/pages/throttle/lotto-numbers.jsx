import { useRef, useState } from "react";
import { useThrottle } from "../../../hooks/use-throttle";

function hackLottoNumbers() {
  console.log("Lotto numbers generated!");
  const numbers = [];
  for (let i = 0; i < 6; i++) {
    const number = Math.floor(Math.random() * 45) + 1;
    numbers.push(number);
  }
  return numbers;
}

export default function LottoNumbers() {
  const [lottoNumbers, setLottoNumbers] = useState([0, 0, 0, 0, 0, 0]);

  //   const lastRun = useRef(Date.now());
  const handleThrottleClick = useThrottle(() => {
    const result = hackLottoNumbers();
    setLottoNumbers(result);
  }, 1000);
  const handleClick = () => {
    // const timeElapsed = Date.now() - lastRun.current;
    // if (timeElapsed >= 1000) {
    //   const result = hackLottoNumbers();
    //   setLottoNumbers(result);
    //   lastRun.current = Date.now();
    //   // const numbers = generateLottoNumbers();
    // }
  };

  return (
    <div>
      <h1>Random Lotto Numbers</h1>
      <p>Click the button below to generate random lotto numbers.</p>
      <button onClick={handleThrottleClick}>번호 맞추기</button>
      <div>
        {lottoNumbers.map((number, index) => (
          <span key={index} style={{ margin: "0 5px", fontSize: "20px" }}>
            {number}
          </span>
        ))}
      </div>
    </div>
  );
}
