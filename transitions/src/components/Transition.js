import { useState } from "react";
import { Transition } from 'react-transition-group'

const TransitionComp = () => {
  let [show, setShow] = useState(true);

  const toggleDiv = () => {
    show ? setShow(false) : setShow(true)
  }

  return (
    <>
    <Transition
    in={show}
    timeout={{
      enter: 2000,
      exit: 50
    }}
    // enter={false}
    // exit={false}
    onEnter={(node)=> {
      console.log('ENTER')
    }}
    onExit={(node)=> {
      console.log('Exit')
    }}
    >
      {state => 
      <div className={`square square-${state}`}>
        {`square square-${state}`}
      </div>
      }
    </Transition>
    <button className="btn btn-primary" onClick={toggleDiv}>Toggle show</button>
    </>
  )
};

export default TransitionComp;
