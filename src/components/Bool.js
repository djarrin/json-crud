import React from 'react';
import {useDispatch, useSelector, connect} from 'react-redux';
import PropTypes from 'prop-types';
import {editValue} from 'redux-resources/actions/JsonDataActions';

const Bool = props => {
  let {value, path} = props

  const dispatch = useDispatch();

  const changeState = () => {
    dispatch(editValue({path: path, value: !value}))
  }
  return (
    <input type={'checkbox'} checked={value} onClick={changeState}/>
  );
};

Bool.propTypes = {
  path: PropTypes.array.isRequired,
  value: PropTypes.bool.isRequired
};

export default Bool;
