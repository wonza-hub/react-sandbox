const Student = ({ name, dispatch, id, isHere }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "gray" : "black",
        }}
        onClick={() => dispatch({ type: "TOGGLE_HERE", payload: { id } })}
      >
        {name}
      </span>
      <button
        onClick={() => dispatch({ type: "REMOVE_STUDENT", payload: { id } })}
      >
        삭제
      </button>
    </div>
  );
};

export default Student;
