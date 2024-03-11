import React, { useEffect, useState } from "react";

function Ex5() {
    const [num,setNum] = useState (0)

    const addVal = (val) => {
        setNum(num + val)
    }

    useEffect(() => {
        console.log(`use effect invoked, state = ${num}`)

        return () => {
            console.log(`count terninated.. bye..`)
        }
    },[num])
    return (
        <div className="container">
            <div className="row">
                <col-md-12 className="text-center">
                    <h3 className="display-3 text-success">UseEffect</h3>
                </col-md-12>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-success"> num = { num }</h1>
                    <button className="btn btn-success" onClick={() => addVal(1)}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Ex5