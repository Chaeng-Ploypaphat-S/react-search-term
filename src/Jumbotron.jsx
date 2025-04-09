import React from 'react'
import {Card, Button} from 'react-bootstrap'

function Jumbotron(props) {
    const hasChildren = React.Children.count(props.children) > 0
    return (
        <div>
            <Card style={{margin: 10}}>
                <Card.Body>
                    <h1>Welcome to the Product Store</h1>
                    {(hasChildren) 
                    ? <p>{props.children}</p> 
                    : <p>Products
                        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                    </p>
                    }
                    <p><Button variant="primary">Learn More</Button></p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Jumbotron