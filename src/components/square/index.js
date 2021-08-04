import { getAllByAltText } from '@testing-library/react';
import {React, Component} from 'react';
import '../../index.css'

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

export default Square;