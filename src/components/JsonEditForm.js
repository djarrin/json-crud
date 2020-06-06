import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import jp from 'jsonpath'
import {useDispatch, useSelector, connect} from 'react-redux';
import Text from 'components/Text';
import Bool from 'components/Bool';
import Node from 'components/Node';

const JsonEditForm = props => {

  let jsonData = useSelector(state => state.jsonData.jsonData);
  jsonData = JSON.parse(jsonData)

  let staticDisplayArray = []
  for (let key of Object.keys(jsonData)) {
    let value = jsonData[key]

    //TODO:: Need to find a way to insure that we are getting the right one
    let path = jp.paths(jsonData, `$..${key}`)[0]

    switch (typeof value) {
      case 'string':
      case 'number':
        staticDisplayArray.push([key, <Text path={path} value={value}/>])
        break
      case 'boolean':
        staticDisplayArray.push([key, <Bool path={path} value={value}/>])
        break
      case 'object':
        staticDisplayArray.push([key, <Node path={path} level={1}/>])
        break
      default:
        //Think we could have functions or bigINTs or whatever else but requirements
        // only specify for these types I believe
        break
    }
  }

  const saveEdits = () => {
    props.onSubmit()
  }

  return (
    <div id={'json-edit-form'}>
      <p className={'level-0'}>{'{'}</p>
      {staticDisplayArray.map((element) => <p className={'level-1'}>{element[0]}: {element[1]}</p>)}
      <p className={'level-0'}>{'}'}</p>
      <button onClick={saveEdits}>Save</button>
    </div>
  );
};

JsonEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default connect()(JsonEditForm);
