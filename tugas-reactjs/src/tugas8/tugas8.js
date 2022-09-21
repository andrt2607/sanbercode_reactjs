import React from 'react';
import './tugas8.css';

const Tugas8 = (props) => {
    return (
        <div className="App-content">
            <h1>Data diri peserta kelas Reactjs</h1>
            <ul>
                <li><strong>Nama Lengkap :</strong> {props.name}</li>
                <li><strong>Email :</strong> {props.email}</li>
                <li><strong>Batch Pelatihan :</strong> {props.batch}</li>
            </ul>
        </div>
    );
}

export default Tugas8;