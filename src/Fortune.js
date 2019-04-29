import React from 'react';
import Axios from 'axios';

class Fortune extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fortune: {}
        }
    }

    async componentDidMount() {
        const fortuneData = await Axios.get('http://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune')
        console.log(fortuneData.data)
        this.setState({
            fortune: fortuneData.data
        })
    }

    render() {
        return (
            <div>
                <h2>Fortune: {this.state.fortune.fortune}</h2>
            </div>
        )
    }
}

export default Fortune;