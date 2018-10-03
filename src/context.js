    import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    var arrayH = this.state.heroes;
    switch (action.type) {
        case 'SHUFFLE_HANDLER':
            return {
                ...state,
                heroes: shuffle(arrayH)
            }
        default:
    }; return state;
}
?
//switch(action.value){
// case heroes.state.value= 1;

//global state
export class Provider extends Component {
    state = {
        heroes: [
            {
                "id": 1,
                "name": "Myrrh",
                "image": "/images/Myrrh.png",
                "clicked": "false"
            },

            {
                "id": 2,
                "name": "Lyn",
                "image": "/images/BraveLyn.png",
                "clicked": "false"
            },

            {
                "id": 3,
                "name": "Celica",
                "image": "/images/Celica.png",
                "clicked": "false"
            },

            {
                "id": 4,
                "name": "Ike",
                "image": "/images/Ike.png",
                "clicked": "false"
            },

            {
                "id": 5,
                "name": "Azura",
                "image": "/images/SpAzura.png",
                "clicked": "false"
            },

            {
                "id": 6,
                "name": "Quan",
                "image": "/images/Quan.png",
                "clicked": "false"
            },

            {
                "id": 7,
                "name": "Ninian",
                "image": "/images/Ninian.png",
                "clicked": "false"
            },

            {
                "id": 8,
                "name": "Linus",
                "image": "/images/Linus.png",
                "clicked": "false"
            },


            {
                "id": 9,
                "name": "Robin",
                "image": "/images/FellRobin.png",
                "clicked": "false"
            },

            {
                "id": 10,
                "name": "Fae",
                "image": "/images/Fae.png",
                "clicked": "false"
            },

            {
                "id": 11,
                "name": "Hinoka",
                "image": "/images/Hinoka1.png",
                "clicked": "false"
            },

            {
                "id": 12,
                "name": "Hector",
                "image": "/images/Hector.png",
                "clicked": "false"
            }
        ],
        dispatch: action => 
            this.setState(state => reducer(state, action))

    };

   // should be able to access dispatch from anywhere

    render() {
        return (
            <Context.Provider wholeVal={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }

}
export const Consumer = Context.Consumer