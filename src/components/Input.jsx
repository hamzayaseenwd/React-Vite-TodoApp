import React from 'react'

const Input = (props) => {
  return (
    <div>
        
        <div>
      <input className='p-4 m-4 border border-solid'
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        onChange={(e) => {
          props.onChangeHandle(e.target.value, props.id);
        }}
      />
    </div>
    
    </div>
  )
}

export default Input