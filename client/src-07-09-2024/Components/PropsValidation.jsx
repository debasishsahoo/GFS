import React from 'react'
import propTypes from 'prop-types'

const PropsValidation = ({any,arr,bol,num,str,obj,func}) => {
  return (
    <div>
        <p>{any}</p>
        <p>{arr}</p>
        <p>{bol}</p>
        <p>{num}</p>
        <p>{str}</p>
        <p>{obj.name}</p>
        <p>{func}</p>
    </div>
  )
}


PropsValidation.propTypes={
    any:propTypes.any,
    arr:propTypes.array.isRequired,
}

PropsValidation.defaultProps={
    any:45,
    arr:[1,2,3],
    bol:true,
    num:34,
    str:'This is String Data',
    obj:{name:'Dev'},
    func:function(x){return x+5}
}


export default PropsValidation