import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    console.log("render, count =", count);

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => {
                setCount(count + 1);
                setCount(count + 1);
                setCount(count + 1);
            }}>+3?</button>
        </>
    );
}
export default Counter;

