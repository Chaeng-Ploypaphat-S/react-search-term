import {Form, Button, Alert} from 'react-bootstrap'
import React, {useState, useActionState} from 'react'

function UserForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (state, formData) => {
        // validate email on the client side
        const email = formData.get('email')
        const password = formData.get('password')

        let emailValid = true
        if (email.length == 0) {
            state.emailError = "Email is required"
        }
        else if (email.length < 6) {
            state.emailError = "Email must be at least 6 characters"
        }
        else if (!email.includes("@")) {
            state.emailError = "Email must contain @"
        }
        else if (!email.includes(".")) {
            state.emailError = "Email must contain ."
        }
        else {
            state.emailError = ""
            emailValid = true
        }

        if (emailValid) {
            // submit the form
            alert(`Email: ${email}\n Password: ${password}\n`)
            setEmail('')
            setPassword('')
        }

        return state
    }
    const [state, formAction] = useActionState(handleSubmit, {emailError:""})

    return (
        <div>
            <Form onSubmit={handleSubmit} action={formAction} style={{margin: 10}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                {
                    state.emailError.length > 0 && 
                    <Alert variant="danger">{state.emailError}</Alert>
                }
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br/>
            <h3>Email: {email}</h3>
            <br/>
            <h3>Password: {password}</h3>
        </div>
    )
}

export default UserForm