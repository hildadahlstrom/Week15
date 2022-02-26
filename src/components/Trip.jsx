import React, {useState} from 'react'
import NewItemForm from './forms/NewItemForm';
import PackingItem from './PackingItem';

const itemId = 0;

function Trip({trip, updateTrips, deleteTrip}) {
    const tripName = trip.tripName;
    const tripDate = trip.dateString;
    const tripItems = trip.tripItems;
    
    const [items, setItems] = useState(tripItems);
    const addNewItem = (item) => {
        setItems([...items, item]);
        return updateTrips({
            ...trip,
            tripItems: [...trip.tripItems, item]
        })
    }

    const deleteItem = (item) => {
            console.log('item: ' + item.id)
        const newItemArray = items.filter((x) => {
            console.log(x._id);
            return x._id !== item.id;
        })
        setItems(newItemArray);
        return updateTrips({
            ...trip,
            tripItems: [...items]
        })

        // return updateTrips(updatedTrip);
    }

    const deleteATrip = () =>{
        return deleteTrip(trip)
        // return deleteTrip(trip)
    }

    return (
        <div className='container each-trip'>
            <div className="row">
                <div className="col-sm-5">
                    <h2>{tripName}</h2>
                </div>
                <div className="col-sm-4">
                    <h4>Start Date: {tripDate}</h4>
                </div>
                <div className="col-sm-3">
                    <button 
                    onClick = {deleteATrip}
                    className = 'submit-button form-control delete-button'>
                        Delete Trip
                    </button>
                </div>
            </div>
            <ul className='itesm-ul'>
                {items && items.map((item, index) => (
                    <PackingItem
                    item= {item}
                    key = {index}
                    deleteItem = {deleteItem}
                    />
                    ))}
                <li>
                    <NewItemForm addNewItem = {addNewItem}/>
                </li>
            </ul>
        </div>
    )
}

export default Trip