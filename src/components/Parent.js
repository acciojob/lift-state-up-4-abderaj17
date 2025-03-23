import React, { useState } from 'react'
import Child from './Child';

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
                <input type='text' value={itemName} 
                onChange={(e) => setItemName(e.target.value)} 
                id='itemName'  />
            </label>
            <br/>
            <label htmlFor='itemPrice'>
                Item Price:
                <input type='number' value={itemPrice} 
                onChange={(e)=> setItemPrice(e.target.value)} id='itemPrice' /> 
            </label> 
            <button id='addItem' onClick={addItem}>Add Item</button>
           
           <Child cartItem={cartItem} removeItem={removeItem} />
        </div>
    </div>
  )
}

export default Parent