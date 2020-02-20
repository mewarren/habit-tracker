import React from 'react';
import AddHabit from './addHabit.component';

export default class Habits extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading : false,
            habits : ['workout', 'code', 'sleep'],
            editing : false
        };
    }

    // saveToLocal = (key, value) => {
    //     const savedData = JSON.stringify(value);
    //     localStorage.setItem(key, savedData);
    // }

    // getFromLocal = (key) => {
    //     return JSON.parse(localStorage.getItem(key));
    // }

    // saveToLocal("michael" , this.state.habits);

    render() {
        return(
            <div className="habits">
                <AddHabit />

            </div>
        )
    }
}