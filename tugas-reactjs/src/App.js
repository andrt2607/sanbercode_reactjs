import './App.css';
import Tugas7 from './tugas7/tugas7';
import Tugas8 from './tugas8/tugas8';
import Tugas9 from './tugas9/tugas9';
import { Navbar } from 'flowbite-react';
import Tugas10 from './tugas10/tugas10';

const App = () => {
  return (
    <>
      <Tugas7/>
      <Tugas8 name="Alif Andarta" batch="38" email="alifandarta26@gmail.com"/>
      <Tugas9/>
      <Tugas10/>
    </>
  );
}

export default App;
