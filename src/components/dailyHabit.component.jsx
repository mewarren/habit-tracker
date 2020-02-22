import React from 'react';
import Checkbox from './checkbox.component';

export default class DailyHabit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

   handleChange = (e) => {
       const name = e.target.name;
       console.log(name);

        
    }

    render() {
        const { habit } = this.props;
        return(
            <li>
                <h2>{habit.name}</h2>
                <fieldset className="checkboxes">
                    {
                        habit.day.map((box, key) => <Checkbox key={key} name={box.name} checked={box.checked} onChange={this.handleChange}/>)
                    }
                </fieldset>
            </li>
        )
    }
}