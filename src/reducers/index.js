import { combineReducers } from 'redux' // combines reducers which make the store
import { reducer as formReducer } from 'redux-form' // reducer
export default combineReducers({
  form: formReducer
})
