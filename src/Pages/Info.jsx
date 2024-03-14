import React from 'react'

function Info(props) {
  return (
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-warning">
                { props.txt.result }
            </h3>
        </div>
    </div>
  )
}

export default Info
