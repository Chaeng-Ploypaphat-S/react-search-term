import React from 'react'
import Products from './Products'
import Rating from './Rating'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function formatName(user){
    return user.firstName + ' ' + user.lastName
}
function App() {
  return (
    <div>
        <Products />
    </div>
  )
}

export default App