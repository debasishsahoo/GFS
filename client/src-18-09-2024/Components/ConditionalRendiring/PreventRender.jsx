import React from 'react'


function Show(props){
    if(!props.displayMessage)
        return null;
    else
        return <h3>Component is Rended</h3>
    
}

const PreventRender = () => {
  return (
    <>
    <div>Message</div>
    <Show displayMessage={true}/>
    </>
  )
}

export default PreventRender