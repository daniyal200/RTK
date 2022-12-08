import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset ,incrementByAmount } from './counterSlice'
import { useState } from 'react'
const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount,setIncrementAmount]=useState(0);
    const addValue = Number(incrementAmount)||0;

    const resetAll=()=> {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (

        <div>
            <p>
                {count}
            </p>
            <button onClick={() => dispatch(increment())}>Add</button>
            <button onClick={() => dispatch(decrement())}>Sub</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <section>
                <input type="text"
                value ={incrementAmount}
                onChange={(e)=> setIncrementAmount(e.target.value)}
                />
                <div>
                    <button onClick={()=> dispatch(incrementByAmount(addValue))}>Add by amount</button>
                    <button onClick={resetAll} >Reset</button>
                </div>
            </section>
            <section>
            </section>
        </div>

    )
}

export default Counter
