import React, {useState} from 'react';

function PackingItem({item, deleteItem}) {
    const [itemName, setItemName] = useState(item.itemName);
    const [itemAmount, setItemAmount] = useState(item.itemAmount);
    const [id, setId ]= useState(item._id)
    console.log('in packing item. item: ' + id)
    return (
        
        <li key = {item._id}>
            <div className="row list-item">
                <div className="col-sm-3">
                    {itemAmount}
                </div>
                <div className="col-sm-6">
                    {itemName}
                </div>
                <div className="col-sm-3">
                    <button 
                        type ="button"
                        className = "submit-button form-control"
                        onClick={(e) => deleteItem(item._id)}
                    >Delete
                    </button>
                </div>
            </div>
        </li>
    )
}

export default PackingItem