import React from 'react';
import Register from './features/appointment/Register';
import UserTable from './features/appointment/UserTable';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Register />
      <UserTable />
    </div>
  );
}

export default App;
