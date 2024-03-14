import React from 'react'

function Marks(props) {
  return (
    <div className='row'>
      <div className="col-md-12">
        <h3 className="display-3 text-danger">Age= { props.age } </h3>
        <button className='btn btn-danger' onClick={() => props.add(1)}> Increment</button>
      </div>
    </div>
  )
}

export default Marks





