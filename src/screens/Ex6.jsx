import React, { useRef, useState } from 'react'

 function Ex6() {
    const [len,setLen] = useState(0)
    const x = useRef()

    const fname = useRef()
    const femail = useRef()
    const fdob = useRef()
    const fmsg = useRef()

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

    const submitHandler = () => {
        let data = {
            name: fname.current.value,
            email: femail.current.value,
            dob: fdob.current.value,
            msg: fmsg.current.value
        }
        console.log('final =', data)
    }

    const clickHandler = () => {
    if(fmsg.current.value.length > 50) {
       console.log(`length should not exceed 50 characters`)
    } else {
      setLen( fmsg.current.value.length)
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
                            <label htmlFor="name">Name</label>
                            <input type="text" name="" id="" ref={fname} className="form-control" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="" ref={femail} className="form-control" />
                        </div>
                        
                        <div className="form-group mt-2">
                            <label htmlFor="date">DOB</label>
                            <input type="date" name="" id="" ref={fdob} className="form-control" />
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="msg">Enter your message</label>
                            <textarea name="msg" id="msg" cols="30" rows="6" ref={fmsg} onKeyUp={clickHandler} className='form-control'></textarea>
                             <strong className="text-strong" id="msgLen"> { len }</strong>
                        </div>
                        <div className="form-group mt-2">
                            <button className="btn btn-primary" onClick={submitHandler}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
 }

 export default Ex6