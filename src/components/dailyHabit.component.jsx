import React from 'react';

export default class DailyHabit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const { habit } = this.props;
        return(
            <div className="dailyHabits">
                <h2>{habit}</h2>
            </div>
        )
    }
}