import React, {useState} from 'react'

function NewItemForm({addNewItem,itemId}) {
    const [itemName, setItemName] = useState('');
    const [itemAmount, setItemAmount] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if(itemName && itemAmount){
            addNewItem({itemName, itemAmount, itemId});
            setItemName('');
            setItemAmount('');
        }
        else{
            console.log('something is invalid');
        }
        
    };

    return (
        <>
            <form className='new-item-form' onSubmit={onSubmit}>
                <div className = 'row' >
                    <div className = 'col-sm-3 amount-col'>
                        {/* <label htmlFor='item-amount'>Number</label> */}
                        <input 
                        className = 'form-control'
                        type = "text"
                        id = "item-amount"
                        placeholder = "Amount"
                        value = {itemAmount}
                        onChange={(e) => setItemAmount(e.target.value)}
                        required
                        />
                    </div>
                    <div className='col-sm-6'>
                        {/* <label htmlFor='item-name'>Item</label> */}
                        <input 
                        className = 'form-control'
                        type = "text"
                        id = "item-name"
                        placeholder = "Item"
                        value = {itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                        />
                    </div>
                    <div className = 'col-sm-3'>
                        <button 
                            className = 'form-control submit-button'
                            type = 'submit' 
                            >
                            Add 
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default NewItemForm