import * as Router from 'react'
import {
  createBrowserRouter
} from "react-router-dom";
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExpenseDashboardPage />
  }
])

export default router