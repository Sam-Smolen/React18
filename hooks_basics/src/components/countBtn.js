import React from "react";

const CountBtn = ({handleCount}) => {
    console.log('3-countBtn')

    return (
        <>
        <button onClick={handleCount}>
            Increment the count
        </button>
        <hr/>
        </>
    )
}

export default React.memo(CountBtn);