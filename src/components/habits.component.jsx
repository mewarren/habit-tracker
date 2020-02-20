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

    addHabit = (habit) => {
        let updatedHabits = [...this.state.habits, habit]
        this.setState({
            habits : updatedHabits,
            editing : false
        });
    }

    handleClick = () => {
        this.setState({
            editing : true
        });
    }

    render() {
        const { editing } = this.state;
        
        return(
            <div className="habits">
                {(!editing) ? <button 
                    className="add" 
                    onClick={this.handleClick}
                    >add new habit</button>
                    :
                
                <AddHabit addHabit={this.addHabit}/>}

            </div>
        )
    }
}