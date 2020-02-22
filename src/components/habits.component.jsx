import React from 'react';
import AddHabit from './addHabit.component';
import DailyHabit from './dailyHabit.component';

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
                day: [
                    { name: 'm', checked: false }, 
                    { name: 't', checked: false },
                    { name: 'w', checked: false },
                    { name: 'th', checked: false }, 
                    { name: 'f', checked: false },
                    { name: 's', checked: false },
                    { name: 'su', checked: false }                   
                ]
            }
        ];
        this.setState({
            habits : updatedHabits,
            editing : false
        });
    }

    checkDay = (key, day) => {
        this.setState(prevState => ({
            habits : prevState.habits
                .map( el => el.id === key ? {
                    ...el, day: {...el, day: !false}
                } : el )

        }))
    }

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
                    className="add" 
                    onClick={this.handleClick}
                    >add new habit</button>
                    :
                <AddHabit addHabit={this.addHabit}/>}

            </div>
        )
    }
}