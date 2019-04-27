import React, { Component } from 'react';
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        slides: ['one', 'two', 'three', 'four', 'five', 'six']
      };

    state = { 
        die1: 'one',
        die2: 'two'
     }

     //Roll method
     roll = () => {
         const newDie1 = this.props.slides[Math.floor(Math.random() * this.props.slides.length)]

         const newDie2 = this.props.slides[Math.floor(Math.random() * this.props.slides.length)]

         this.setState({
             die1: newDie1,
             die2: newDie2
         })
     }
    
   

    render() { 
        return ( 
            <div className='RollDice'>
                 <div className='RollDice-container'>
                    <Die face={this.state.die1} />
                    <Die face={this.state.die2}/>
                 </div>
               
                <button onClick={this.roll}>Roll Die</button>
            </div> 
         );
    } 
}
 
export default RollDice;