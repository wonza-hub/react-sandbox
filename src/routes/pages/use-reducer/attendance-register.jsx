import { useReducer, useState } from "react";
import Student from "./components/student";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        count: state.count + 1,
        students: [
          ...state.students,
          { id: action.payload.id, name: action.payload.name, isHere: false },
        ],
      };
    case "TOGGLE_HERE":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id
            ? { ...student, isHere: !student.isHere }
            : student
        ),
      };
    case "REMOVE_STUDENT":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
const initialState = {
  count: 0,
  students: [],
};

export default function AttendanceRegister() {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="학생 이름"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_STUDENT", payload: { name, id: Date.now() } });
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          dispatch={dispatch}
          id={student.id}
          isHere={student.isHere}
        />
      ))}
    </>
  );
}
