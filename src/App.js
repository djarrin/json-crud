import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import JSONPretty from 'react-json-pretty';
import 'assets/styles/bootstrap-grid.min.css';
import 'App.scss';
import {connect} from 'react-redux';
import {isJson} from 'utils';
import {setJsonData} from 'redux-resources/actions/JsonDataActions';
import JsonEditForm from 'components/JsonEditForm';

function App() {

  //This is going to be a simple state with three stages (start, edit, show)
  const [formState, setFormState] = useState('start')
  const [formError, setFormError] = useState('')

  const jsonData = useSelector(state => state.jsonData);
  const dispatch = useDispatch();

  const editJson = (e) => {
    e.preventDefault()

    let textBoxValue = document.getElementById('initial-json-data').value
    if(isJson(textBoxValue)) {
      setFormError('')
      dispatch(setJsonData({jsonData: textBoxValue}))
      setFormState('edit')
    } else {
      setFormError('Invalid JSON object entered, try again')
    }
  }

  const jsonEditFormSubmitted = () => {
    setFormState('show')
  }

  return (
    <div className="App">

      {formState === 'start' ?
        (<>
          <form
            onSubmit={(e) => editJson(e)}
          >
          <p>Please enter a valid json string so you can get to editing it</p>
          <textarea
            id={'initial-json-data'}
          />
          <button id={'edit'} type={'submit'}>Edit</button>
          </form>
        </>) : null
      }

      {formState === 'edit' ?
        (
          <JsonEditForm onSubmit={jsonEditFormSubmitted}/>
        ) : null
      }

      {formState === 'show' ?
        (
          <JSONPretty id="json-pretty" data={jsonData}></JSONPretty>
        ) : null
      }

      <p className={'error'}>{formError}</p>
    </div>
  );
}

export default connect()(App);
