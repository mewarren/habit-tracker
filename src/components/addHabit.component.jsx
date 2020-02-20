import React from 'react';

export default class AddHabit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            habit : ''
        };
    }

    handleChange = ({ target }) => {
        this.setState({
            habit : target.value
        });
    }

    render() {
        const { habit } = this.state;
        
        return(
            <form className="addHabit">
                <input onChange={this.handleChange} value={habit}/>
                <button>Add</button>
            </form>
        );
    }
}