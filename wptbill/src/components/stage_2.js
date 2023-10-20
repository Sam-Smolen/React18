import React,{useContext} from 'react';
import { Mycontext } from "../context";

const Stage2 = () =>  {

    const context = useContext(Mycontext);
    console.log({context})

    return(
        <>
        <div className='result_wrapper'>
            <h3>The loser is:</h3>
            <div>{context.state.result}</div>
        </div>
        <div className='action_button'
        onClick={()=> context.resetGame()}
        >
            START OVER
        </div>
        <div className='action_button btn_2'
        onClick={()=> context.getNewLoser()}
        >
            GET NEW LOSER
        </div>
        </>
    )
}

export default Stage2;