import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Hello2 from './components/Hello2'
import Car from './components/Car';
import Camioneta from './components/Camioneta';
import Moto from './components/Moto';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import Counter from './components/Counter';
import ViewPosts from './components/ViewPosts';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div>
      <Hello></Hello>
      <Hello2></Hello2>
      <Car brand='ford' color='azul'></Car>
      <Camioneta brand='mazda' color='rojo'></Camioneta>
      <Moto marca="Yamaha" color="negro" modelo="yamaha z250"></Moto>
      <Clock></Clock>
      <Toggle></Toggle>
      <Counter></Counter>
      <ViewPosts></ViewPosts>
      <LoginForm></LoginForm>
    </div>
   );
}

export default App;
