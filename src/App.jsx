import React from 'react'
import Products from './Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from './Jumbotron'

function App() {
  return (
    <div>
        <Products />
        <Jumbotron>
          This is a long sentence, and I want to insert content into the jumbotron.
        </Jumbotron>
    </div>
  )
}

export default App