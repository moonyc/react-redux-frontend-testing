import * as Router from 'react'
import {
  createBrowserRouter
} from "react-router-dom";
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExpenseDashboardPage />,
  },
  {
    path: '/create',
    element: <AddExpensePage />
  },
  {
    path: '/edit/:id',
    element: <EditExpensePage /> 
  },
  {
    path: '/help',
    element: <HelpPage /> 
  }
])



export default router