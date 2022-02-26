import React, {useState} from 'react'
import DatePicker from 'react-date-picker';

function NewTripForm({addNewTrip}) {
    const [tripName, setTripName] = useState('');
    const [tripDate, setTripDate] = useState(new Date());
    const [tripItems, setTripItems] = useState([]);

    const onSubmit = (e) => {
        
        e.preventDefault();
        if(tripDate && tripName){
            const dateString = makeDate(tripDate)
            addNewTrip({tripName, dateString, tripItems});
            setTripDate(new Date());
            setTripName('');
            setTripItems([]);
        }
        
    }

    const makeDate = (date) =>{
        let month = (date.getMonth() + 1)
        month = month.toString();
        if(month.length < 2){
            month = '0' + month;
        }
        let day = date.getDate();
        day = day.toString();
        if(day.length < 2){
            day = '0' + day;
        }
        let year = date.getFullYear().toString();
        let dateString = `${month}/${day}/${year}`;
        return dateString;
    }

    return (
        <form className='new-trip-form' onSubmit={onSubmit}>
            <div className='form-group trip-form'>
                <label htmlFor='trip-name'>Your Trip's Name</label>
                <input 
                className='form-control'
                type = "text"
                id = "trip-name"
                placeholder = "Trip Name"
                value = {tripName}
                onChange={(e) => setTripName(e.target.value)}
                required
                />
            </div>
            <div className = 'form-group trip-form'>
                <label htmlFor='trip-date'>Trip Start Date</label>
                <DatePicker
                    onChange={setTripDate}
                    value = {tripDate}
                    format = {'MM-dd-yyyy'}
                    className = 'form-control'
                />
            </div>
            <button 
                className = 'submit-button trip-submit '
                type = 'submit' 
            >
                Add New Trip
            </button>
        </form>
    )
}

export default NewTripForm