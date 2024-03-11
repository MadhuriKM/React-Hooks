import React, { useState, useLayoutEffect } from 'react'

function Ex4() {
    const [num, setNum] = useState(0)

    const incVal = (val) => {
        setNum(num + val)
    }

    // useLayoutEffect(calback,[dep])
    useLayoutEffect(() => {
        console.log(`layout effect triggered, current state = ${num}`)
    },[num])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-5 text-warning">useLayout Effect</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <p className="text-secondary">
                        Which has same signature (structure) to useEffect <br />
                        But it fires synchronously after all DOM mutations <br />
                        Use this to read layout from the DOM and synchronously re-render the component <br />
                        Updates schedule inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint( mounting of DOM) <br />

                        If you are comparing with class component methods, useLayoutEffect fires same as like componentDidMount() and ComponentDidUpdate()

                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-success"> number = { num }</h1>
                    <button className="btn btn-success" onClick={() => incVal(1)}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Ex4