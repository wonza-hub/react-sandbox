import { useReducer, useState } from "react";

// reducer: state를 업데이트하는 함수 (은행)
// dispatch: action을 발생시키는 함수 (예금, 출금)
// action: state를 업데이트하기 위한 정보 (예금액, 출금액)
const ACTION_TYPES = {
  deposit: "DEPOSIT",
  withdraw: "WITHDRAW",
};
const reducer = (state, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};
export default function Bank() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>useReducer 은행</h2>
      <h3>잔액: {money}원</h3>
      <input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
        value={number}
        placeholder="잔액을 입력하세요"
        step={"1000"}
      />
      <button
        onClick={() => {
          dispatch({ type: "DEPOSIT", payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "WITHDRAW", payload: number });
        }}
      >
        출금
      </button>
    </>
  );
}
