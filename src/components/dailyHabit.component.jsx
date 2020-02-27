import React from 'react';
import Checkbox from './checkbox.component';

export default class DailyHabit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            day : [
                { checked : false, name : 'monday' }, 
                { checked : false, name : 'tuesday' },
                { checked : false, name : 'wednesday' },
                { checked : false, name : 'thursday' }, 
                { checked : false, name : 'friday' },
                { checked : false, name : 'saturday' },
                { checked: false, name : 'sunday' }                   
            ]
        };
    }

   handleChange = (event) => {
        const n = event.target.name;
        const isChecked = this.state.day.find(({ name }) => name === n);
        
        this.setState(prevState => ({ 
            day : prevState.day.map(el => el.name === n ?
                { ...el, checked : !isChecked.checked} : el )     
       }));        
    }

    render() {
        const { habit } = this.props;
        const { day } = this.state;
        return(
            <li>
                <h2>{habit.name}</h2>
                <fieldset className="checkboxes">
                    {
                        day.map((box, key) => 
                            <Checkbox 
                                key={key} 
                                name={box.name} 
                                checked={box.checked} 
                                onChange={this.handleChange}
                            />)
                    }
                </fieldset>
            </li>
        )
    }
}