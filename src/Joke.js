import React from 'react';
import Axios from 'axios';

class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: ''
        }
    }
    async componentDidMount() {
        const jokeData = await Axios.get("https://icanhazdadjoke.com/",
            { headers: { 'Accept': 'application/json'} })
        console.log(jokeData.data.joke)
        this.setState({
            joke: jokeData.data.joke
        })
    }
    render() {
        return (
            <div className="widget">
                <h2>Joke: {this.state.joke}</h2>
            </div>
        )
    }
}

export default Joke;