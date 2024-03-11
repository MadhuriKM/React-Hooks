import React, { useReducer } from 'react'

// reducer logic
function customReducer(state,action) {
  switch(action) {
    case "inc": console.log(`inc called`)
      return { qnty: state.qnty + 1}
      break;

      case "dec": console.log(`dec called`)
      return state.qnty <= 1 ? { qnty: 1 } : { qnty: state.qnty - 1}
      break;

      case "clear": console.log(`clear called`)
      return { qnty: 1}
        break;
      default:
  }
}

function Ex2() { 
  let initState = { qnty: 1 }
  // const [state,dispatch] = useReducer(reducer,initialstate)
  const [state,dispatch] = useReducer(customReducer,initState)

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-warning">useReducer Hook</h3>
            </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="text-dark">
              This hook is an alternative to useState, when you have complex state logic.It takes reducer function and an initial state or data, and returns the current state dispatch function to update it <br />
            </p>
            <p>const [state,dispatcher] = useReducer(reducer,initialData)</p>
          </div>
        </div>

        <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="text-success"> state = { state.qnty }</h1>
            <button className='btn btn-success' onClick={() => dispatch('inc')}>Increment</button>
            <button className='btn btn-warning' onClick={() => dispatch('dec')}>Decrement</button>
            <button className='btn btn-danger' onClick={() => dispatch('clear')}>Clear</button>
        </div>
        </div>
    </div>
  )
}

export default Ex2