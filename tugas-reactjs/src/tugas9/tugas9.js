import React from 'react';
import { useState } from 'react';
import './tugas9.css';

const Tugas9 = () => {

    let [number, setNumber] = useState(1);

    const increaseNumber = () => {
        setNumber(number + 1);
    }

    return (
        <div className="App-content">
            <p className='App-number'>{number}</p>
            <button onClick={increaseNumber}>Tambah</button>
            {number >= 10 ? <p>State count sudah lebih dari 10!!</p> : <p></p>}
        </div>
    );
}


export default Tugas9;