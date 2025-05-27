import { useCallback, useEffect, useState } from "react";

export default function SomeFunction() {
  const [number, setNumber] = useState(0);

  // 함수의 객체 초기화 -> someFunction(주소값)이 매번 새로 생성됨
  const someFunction = () => {
    console.log("This is a function that does something.");
  };

  // useCallback을 사용하여 someFunction을 메모이제이션
  const someFunctionMemo = useCallback(() => {
    console.log(`This is a memoized function that does something. ${number}`);
  }, [number]);

  useEffect(() => {
    console.log("someFunction has been called");
  }, [someFunction]);

  return (
    <div>
      <h1>Some Function Example</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={someFunctionMemo}>Click Me</button>
    </div>
  );
}
