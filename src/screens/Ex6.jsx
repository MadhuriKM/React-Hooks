import React, { useRef } from 'react'

 function Ex6() {
    const x = useRef()

    const handler = () => {
        console.log('clicked')
        console.log(x.current.value)
        if(x.current.value === "") {
            x.current.classList.add('bg-warning')
            setTimeout(() => {
                x.current.classList.remove("bg-warning")
            }, 3000)
        } else {
            x.current.classList.add("bg-success")
            setTimeout(() => {
                x.current.classList.remove('bg-success')
            }, 3000)
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">useRef Hook</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1 id="title" className="display-1 text-danger">Test title</h1>
                    <div className="form-group">
                    <input type="text" name="test" id="test" ref={x} className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-dander" onClick={handler}>Click me</button>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <div className="form-group mt-2">
                            <label htmlFor="name">Email</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="" className="form-control" />
                        </div>
                        <div className="form-group mt-2">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
 }

 export default Ex6