import React, { Component } from 'react';
import Hello from './repaso1-components/Hello';
import Hello2 from './repaso1-components/Hello2'
import Car from './repaso1-components/Car';
import Camioneta from './repaso1-components/Camioneta';
import Moto from './repaso1-components/Moto';
import Clock from './repaso1-components/Clock';
import Toggle from './repaso1-components/Toggle';
import Counter from './repaso1-components/Counter';
import ViewPosts from './repaso1-components/ViewPosts';
import LoginForm from './repaso1-components/LoginForm';

class Repaso1 extends Component {
    render() {
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
}

export default Repaso1;