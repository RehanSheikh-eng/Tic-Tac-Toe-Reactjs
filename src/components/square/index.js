import { getAllByAltText } from '@testing-library/react';
import {React, Component} from 'react';
import '../../index.css'

class Square extends Component{
    render(){
        return(
            <button className="square" onClick={() => alert('click')}>
                {this.props.value}
            </button>
        );
    }

}

export default Square;