import {React, Component} from 'react';

class Square extends Component{
    render(){
        <button className="square">
            {this.props.value}
        </button>
    }

}

export default Square;