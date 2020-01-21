import React from 'react';
import  AppRouter  from './routes/AppRouter'
import './App.css';
//needed to make the date picker be styled prtoperly
import 'react-dates/lib/css/_datepicker.css'
import '../src/firebase/firebase'






function App() {
  return (
    <div>
      
      <AppRouter />
     
    </div>
  )
}

export default App;
