import React from 'react'

const Child = ({cartItem, removeItem}) => {
  return (
    <div className='child' style={{marginTop: "20px"}}>
     <h2>Child Component</h2>
     {cartItem.length === 0 ? (
      <p>No items in cart.</p>
     ):(
      <ol className='items'>
        {cartItem.map((item, index) =>(
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(index)} style={{marginLeft: "10px", color: "red"}}>
              Remove
            </button>
          </li>
        ))}
      </ol>
     )}
    </div>
  )
}

export default Child