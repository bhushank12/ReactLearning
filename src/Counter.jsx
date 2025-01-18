import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const reset = () => {
        setCounter(0)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return(
        <>
            <p>Counter: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Counter;