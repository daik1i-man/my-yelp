import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Provider from './provider/provider';
import ModalComponent from './components/modalComponent/modalComponent';
import PageRoutes from './Routes/pageRoutes';
import AddRestarauntComponent from './components/addRestarauntComponent/addRestarauntComponent';

export default function App() {
  return (
    <Router>
      <Provider>
        <ModalComponent />
        <AddRestarauntComponent />
        <PageRoutes />
      </Provider>
    </Router>
  )
}

