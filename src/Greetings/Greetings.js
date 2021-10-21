import React, {Component} from 'react';

class Greetings extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            city: this.props.city
        }
    }

    render(props) {
        return (
            <div className="Greetings">
                <h1>Hello {this.props.name}, I am from {this.props.city}</h1>
            </div>

        );
    }

}
export default Greetings;