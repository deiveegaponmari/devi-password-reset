import Card from "../components/Card";
import React, { useRef } from "react";
import { useNavigate } from "react-router"

export default function Signin() {
    const navigate=useNavigate();
    const EMAIL = useRef(null);
    const PASSWORD = useRef(null);

    function handlebutton() {
    /*     e.preventDefault(); */
        const payload = {
            email: EMAIL.current.value,
            password: PASSWORD.current.value
        }
        if (!payload.email || !payload.password) {
            return;
        }
        fetch("http://localhost:3000/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)

        }).then((result) => {
            console.log(result)
            //go to home page
            if(result&& result.status===200){
                setInterval(()=>{
                    navigate("/")
                },2000)
            }
         
        }).catch((error) => {
            console.log(error)
        })

    }
    function handleforgot(){
        const payload={
            email:payload.current.value
        }
        if(!payload.email){
            return;
        }else{
            setInterval(()=>{
                navigate('/email_verify')
            },1000)
        }
    }

    return (
        <div className="container">
            <Card>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input ref={EMAIL} type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input ref={PASSWORD} type="password" className="form-control" id="password" placeholder="********" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={()=>handlebutton()} type="button">Login</button>
                </div>
                <div className="mb-2">
                    <h6>Forgot password?</h6>
                    <button onClick={()=>handleforgot()}>Click Here</button>
                </div>
            </Card>
        </div>
    )
}