import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Tweneboah',
                phone: '0243203810',
                email: 'abc@gmail.com'
            },
            {
                id: 2,
                name: 'Prince',
                phone: '3554557785',
                email: 'abc@gmail.com'
            },
            {
                id: 3,
                name: 'Yaw',
                phone: '76564535',
                email: 'abc@gmail.com'
            }
        ]
    }

    render () {
        return (
            <Context.Provider value ={this.state} >
                  {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;