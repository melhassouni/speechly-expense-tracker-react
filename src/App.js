import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import  { LandingPage, TransactionPage, NotFoundPage } from './pages'
import { incomeCategories } from './data/categories'

function App() {


  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/transaction/:txType' element={<TransactionPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  );
}

export default App;
