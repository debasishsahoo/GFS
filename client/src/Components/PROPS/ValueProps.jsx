import React from 'react'

const ValueProps = (props) => {
    return (
        <div>
            <h2>String Literals:</h2>{props.strData}
            <h2>Number Literals:</h2>{props.numData}
            <h2>Boolean Literals:</h2>{props.boolData}
            <h2>Array Literals:</h2>{props.arrData}
            <h2>Object1 Literals:</h2>{props.objData.d1}
            <h2>Object2 Literals:</h2>{props.objData.d2}
            <h2>Template Literals:</h2>{props.tempData}
            <h2>Jsx Literals:</h2>{props.jsxData}
            <h2>Any Data Literals:</h2>{props.anyData}
           
        </div>
    )
}

export default ValueProps
