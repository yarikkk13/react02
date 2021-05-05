import {useState} from "react";
import Users from "./users/Users";

export default function App() {
    let [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(++counter)
    }
    const decrement = () => {
        setCounter(--counter)
    }
    const reset = () => {
        setCounter(0)
    }

    return (
        <div>
            <div><h2>state is - ${counter}</h2>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
            </div>
            <h1></h1>
            <div>
                <Users/>
            </div>
        </div>
    );
}
