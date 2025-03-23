import React from 'react'

const Parent = () => {
  return (
    <div>
        <div className='parent'>
            <label htmlFor='itemName'>
                Item Name:
                <input type='text' id='itemName' />
            </label>
            <label htmlFor='itemPrice'>
                Item Price:
                <input type='number' id='itemPrice' />
            </label>
            <div className='child'>
                <ol className='items'></ol>
            </div>
        </div>
    </div>
  )
}

export default Parent