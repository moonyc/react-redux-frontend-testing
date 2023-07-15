import * as React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './style.css'
import router from './routers/Router'
import { Provider } from 'react-redux'
import { createStore, combineReducers} from 'redux'
import expensesReducer from './reducers/expenses'
import filtersReducer from './reducers/filters'

const store = createStore(
  combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const Jsx = () => {
  return(
    <React.StrictMode>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={router} />
     </LocalizationProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(
    <Provider store={store}>
      <Jsx />
    </Provider>,
    document.querySelector('#root')
)