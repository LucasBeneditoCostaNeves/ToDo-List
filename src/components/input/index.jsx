import React from 'react'

export const Input = ({label,type,placeholder,register}) => {

  return (
    <div>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} {...register} />
    </div>
  )
}