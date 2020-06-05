import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector, connect} from 'react-redux';
import {editValue} from 'redux-resources/actions/JsonDataActions';

const Text = props => {
  let {value, path} = props

  const dispatch = useDispatch();

  const changeState = () => {
    dispatch(editValue({path: path, value: 'new value'}))
  }

  return (
    <input type={'text'} value={value} onChange={changeState}/>
  );
};

Text.propTypes = {
  path: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]).isRequired
};

export default Text;
