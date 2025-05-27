import { useEffect, useMemo, useState } from "react";

export default function ObjectMemo() {
  const [number, setNumber] = useState(0);
  const [isKorean, setIsKorean] = useState(true);

  const location = isKorean ? "한국" : "USA";
  // location이 객체인 경우
  const locationObj = { country: isKorean ? "한국" : "USA" };

  //   useEffect(() => {
  //     console.log("useEffect 실행");
  //     //   }, [location]);
  //   }, [locationObj]);

  const locationMemo = useMemo(() => {
    console.log("useMemo 실행");
    return { country: isKorean ? "한국" : "USA" };
  }, [isKorean]);

  return (
    <>
      <h1>하루에 몇 끼 먹어요?</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <hr />
      <h1>어느 나라에 있어요?</h1>
      {/* <p>나라: {locationObj}</p> */}
      {/* <p>나라: {locationObj.country}</p> */}
      <p>나라: {locationMemo.country}</p>

      <button onClick={() => setIsKorean(!isKorean)}>Toggle Location</button>
    </>
  );
}
