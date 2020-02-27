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

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addHabit(this.state.habit);
        this.setState({
            habit : ''
        });
    }

    render() {
        const { habit } = this.state;
        
        return(
            <form className="addHabit" onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={habit}/>
                <button type="submit">Add</button>
            </form>
        );
    }
}