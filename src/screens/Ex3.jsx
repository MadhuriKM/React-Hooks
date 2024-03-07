import React, { useEffect, useState } from 'react'
import ChatRoom  from '../doc/ChatRoom'


    /* 
        
        useEffect(callback,[dependency list])

        1. mount
        useEffect(function(){},[])

        2. Update
        useEffect(function(){},[dep])

        3. UnMount
        useEffect(function(){
            return ()=> {

            }
        }, [])
    */
        function Ex3() {
            const [roomId,setRoomId] = useState('general')
            const [show,setShow] = useState(false)
        useEffect(() => {

        },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-5 text-warning">useEffect</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <label htmlfor="">Choose thechat room: {''}</label>
                    <div className="input-group">
                        <select className="form-select" value={roomId} onChange={e => setRoomId(e.target.value)}>
                            <option value="general">General</option>
                            <option value="travel">Travel</option>
                            <option value="music">Music</option>
                        </select>
                        {
                            show ? <button onClick={() => setShow(!show)} className="btn btn-danger">Close Chat</button>
                               : <button onClick={() => setShow(!show)} className="btn btn-success">Open Chat</button>
                        }
                    </div>
                </div>
            </div>
            {
                show && <hr/>
            }
            {
                show && <ChatRoom roomId={roomId}/>
            }
        </div>
    )
}

export default Ex3