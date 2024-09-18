import React from 'react'

const SignUp=()=>{
    return(<h1>SignUp</h1>)
}
const LogIn=()=>{
    return(<h1>LogIn</h1>)
}
const Dashboard=()=>{
    return(<h1>Dashboard</h1>)
}


export default function EnumState(props){
    const STATES={
        login:<LogIn/>,
        signup:<SignUp/>,
        dashboard:<Dashboard/>
    }
    return(
        <div>
            <h1>Conditional Rendering using Enum</h1>
            {STATES[props.state]}
        </div>
    )
}