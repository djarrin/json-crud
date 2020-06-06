import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import jp from 'jsonpath';
import Text from 'components/Text';
import Bool from 'components/Bool';

const Node = props => {
  let { path, level} = props

  const jsonData = useSelector(state => JSON.parse(state.jsonData.jsonData));
  let nodeValue = jp.value(jsonData,path)

  //TODO:: This needs to be refactored into a central function
  let staticDisplayArray = []
  for (let key of Object.keys(nodeValue)) {
    let value = nodeValue[key]
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

  return (
    <div>
      {staticDisplayArray.map((element) => <p className={'level-1'}>{element[0]}: {element[1]}</p>)}
    </div>
  );
};

Node.propTypes = {
  path: PropTypes.array.isRequired,
  level: PropTypes.number.isRequired
};

export default Node;
