import * as Router from 'react'
import {
  createBrowserRouter
} from "react-router-dom";
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExpenseDashboardPage />
  },
  {
    path: '/edit/:id',
    element: <EditExpensePage /> 
  }
])

export default router