import React from 'react';
import AddHabit from './addHabit.component';
import DailyHabit from './dailyHabit.component';

import './styles/habits.style.scss';

export default class Habits extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading : false,
            habits : [],
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
        let habitId = this.state.habits.length;
        let updatedHabits = [...this.state.habits, 
            { 
                name : habit,
                id : habitId, 
                // day: [
                //     { name: 0, checked: true }, 
                //     { name: 1, checked: false },
                //     { name: 2, checked: false },
                //     { name: 3, checked: false }, 
                //     { name: 4, checked: false },
                //     { name: 5, checked: false },
                //     { name: 6, checked: false }                   
                // ]
            }
        ];
        this.setState({
            habits : updatedHabits,
            editing : false
        });
    }

    // checkDay = (key, name) => {
    //     const habit = {...this.state.habits};
    //     this.setState(prevState => ({
    //         habits : prevState.habits
    //             .map( el => el.name === name ? {
    //                 ...el, day : [name].checked: !false 
    //              } : el )

    //     }))
    // }

    handleClick = () => {
        this.setState({
            editing : true
        });
    }

    render() {
        const { editing, habits } = this.state;
        
        return(
            <div className="habits">
                <ul className="dailyHabits">
                    {habits.map( (habit, key)=>
                        <DailyHabit 
                            habit={habit} 
                            key={key} 
                            checkDay={this.checkDay}
                        />
                    )}
                </ul>
                
                {(!editing) ? <button 
                    className="add-button" 
                    onClick={this.handleClick}
                    >add new habit</button>
                    :
                <AddHabit addHabit={this.addHabit}/>}

            </div>
        )
    }
}