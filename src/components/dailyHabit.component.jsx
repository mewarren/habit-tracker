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
            <li>
                <h2>{habit}</h2>
            </li>
        )
    }
}