import React, { useState } from 'react'

function Ex1() {
  // const [state,handler] = useState(initialvalue)

  const [num,setNum] = useState(0)

  const addVal = (val) => {
    setNum(num + val)
  }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-warning">useState Hooks</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="text-success"> num = { num }</h3>
                <button className='btn btn-primary' onClick={() => addVal(1)}>Add+1</button>
            </div>
        </div>
    </div>
  )
}

export default Ex1