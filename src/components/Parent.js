import React, { useState } from 'react'

const Parent = () => {
    const [cartItem, setCartItem] = useState([]);
    const [itemName , setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");

    const addItem = () =>{
        if(itemName.trim() && itemPrice){
            setCartItem([...cartItem, {name: itemName, price : Number(itemPrice)}]);
            setItemName("");
            setItemPrice("");
        }
    };

    const removeItem = (index) =>{
        const updatedCart = cartItem.filter((_, i) => i !== index);
        setCartItem(updatedCart);
    }
  return (
    <div>
        <div className='parent'>
        <h1>Parent Component</h1>
            <label htmlFor='itemName'>
                Item Name:
                <input type='text' id='itemName'  />
            </label>
            <br/>
            <label htmlFor='itemPrice'>
                Item Price:
                <input type='number' id='itemPrice' /> 
            </label> 
            <button id='addItem'>Add Item</button>
            <div className='child'>
            <h2>Child Component</h2>
                <ol className='items'></ol>
            </div>
        </div>
    </div>
  )
}

export default Parent