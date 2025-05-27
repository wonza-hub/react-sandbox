import { useMemo, useState } from "react";

const hardCalculate = (number) => {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += number + i;
  }
  return result;
};

export default function HardCalculation() {
  const [hardNumber, setHardNumber] = useState(1);

  //   const hardSum = hardCalculate(hardNumber);
  const hardSumMemo = useMemo(() => hardCalculate(hardNumber), [hardNumber]);

  return (
    <div>
      <h1>Hard Calculation Result</h1>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(Number(e.target.value))}
      />
      {/* <p>+ 10000 = {hardSum}</p> */}
      <p>+ 10000 (Memoized) = {hardSumMemo}</p>
    </div>
  );
}
