import { useCallback, useState } from "react";
import Box from "./components/box";

export default function BoxStyle() {
  const [size, setSize] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // isDark가 변경되면 createBoxStyle 함수도 새로 생성됨
  //   const createBoxStyle = () => {
  //     return {
  //       backgroundColor: "blue",
  //       width: `${size}px`,
  //       height: `${size}px`,
  //     };
  //   };
  // useCallback을 사용하여 createBoxStyle을 메모이제이션
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "blue",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>Toggle Dark Mode</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}
