import useCounter from "../hooks/useCounter";

const MyCounterApp = () => {
  const { counter, handleAdd, handleSubtract, handleReset } = useCounter(5);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>My Counter App</h1>
      <h2>Counter: {counter}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Resset</button>
      </div>
    </div>
  );
};

export default MyCounterApp;
