import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector, connect} from 'react-redux';
import {editValue} from 'redux-resources/actions/JsonDataActions';

const Text = props => {
  let {value, path} = props

  const dispatch = useDispatch();

  const changeState = (e) => {
    dispatch(editValue({path: path, value: e.target.value}))
  }

  return (
    <input type={'text'} value={value} onChange={(e) => changeState(e)}/>
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
