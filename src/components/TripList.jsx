import React, { useState, useEffect, useRef } from 'react';
import { tripApi } from '../rest/TripApi';
import NewTripForm from './forms/NewTripForm';
import Trip from './Trip';

function TripList() {
    const [trips, setTrips] = useState();
        
    const getAllTrips = async () => {
        setTrips(await tripApi.get());
        displayTrips();

    }

    const addNewTrip = async(trip) => {
        await tripApi.post(trip);
        getAllTrips();
    }

    const updateTrips = async (updatedTrip) => {
        setTrips(await tripApi.get());
        await tripApi.put(updatedTrip);
        getAllTrips();
    }

    const deleteTrip = async(trip) => {
        await tripApi.delete(trip);
        setTrips(await tripApi.get())
        //updateTrips(trip)
        getAllTrips();
    }
    
    const displayTrips = () => {  
        return(
            <div className = 'trips-list'>
                {trips && trips.map((trip, index) => (
                    <Trip
                    trip= {trip}
                    key = {index}
                    updateTrips = {updateTrips}
                    deleteTrip = {deleteTrip}/>
                ))}

            </div>
        )
    }
    
    useEffect(() => {
        getAllTrips()

    }, [])
    
    // if(!trips || trips.length === 0){
    //     return(
    //         <>
    //             <h3>You haven't added any trips yet.</h3>
    //             <h3>Add a trip to start adding items</h3>
    //         </>
    //     )
    // }

    return (
        <>
            <h1 className='packing'>Trip Packing List</h1>
            <NewTripForm addNewTrip = {addNewTrip}/>
            <div className = 'trips-list'>
                {displayTrips()}
            </div>
        </>
    )
}



export default TripList