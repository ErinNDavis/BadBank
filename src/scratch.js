//------------CreateAccount-----------------------------------------
import { React, useState, status, useContext, useEffect} from "react";
import { Card, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { userContext } from "../userContext";

function CreateAccount(){
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formChanged, setFormChanged] = useState(false);
    const [users, setActiveUser] = useContext(userContext);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        users.push({name, email, password, balance:0, id:users.length});
        //setActiveUser(users[users.length-1]);

        console.log(JSON.stringify(users));
        setShow(false);

        setValidated(true);

        
    };

    async function handleFormChange({ target:{id, value }}){
        id === 'name' ? setName(value) : id === 'email' ? setEmail(value) : setPassword(value);
    }

    useEffect(()=>  {
        if(!name && !email && !password){
            setFormChanged(false);
        } else {
            setFormChanged(true);
        }
    }, [name, email, password]
    )

    return (
        <Card
            bgcolor="primary"
            header="Create Account"
            status={status}
        >
            <Card.Header> Create An Account </Card.Header>
            <Card.Body>
                <Form noValidate validated={validated} onChange={handleFormChange}>
                    <Form.Group className="mb-3"> 
                        <Form.Label> Enter Full Name </Form.Label>
                        <Row>
                            <Col>
                                <Form.Control 
                                    required
                                    type="text"
                                    placeholder="First name"
                                    id="name"
                                />
                            </Col>
                            <Col>
                                <Form.Control 
                                    required
                                    type="text"
                                    placeholder="Last name"
                                />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control 
                                type="email" 
                                placeholder="email@address.com"
                                required 
                                id="email"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid email address
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control 
                                type="password" 
                                placeholder="password"
                                required 
                                id="password"
                            />
                        </InputGroup>
                        <Form.Text className="text-muted">
                            Strong passwords have at least 8 characters.
                        </Form.Text>
                    </Form.Group>
                
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Create Account
                    </Button> 
                    <Button as="input" type="reset" value="Reset"/>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CreateAccount;

//-----------------Context-------------------------------------------
import { React, createContext, useState} from 'react';

export const userContext = createContext();

const UserContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState([]);
    return (
        <userContext.Provider value={{users, setUsers, activeUser, setActiveUser}}>
            {props.children}
       </userContext.Provider>
   );
}
export default UserContextProvider;

//--------------Withdraw---------------------------------------------

import { React, useState, status} from "react";
import { Card, Form, Button, InputGroup } from 'react-bootstrap';


function Withdraw(){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Card
            bgcolor="primary"
            header="Create Account"
            status={status}
        >
            <Card.Header> Create An Account </Card.Header>
            <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    
                    <Form.Group className="mb-3" controlId="Withdraw Amount">
                        <Form.Label>Withdraw Amount</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control 
                                type="number" 
                                placeholder="$0"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid amount to withdraw.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Withdraw
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Withdraw;

//------------Deposit------------------------------------------
import { React, useState, status} from "react";
import { Card, Form, Button, InputGroup } from 'react-bootstrap';


function Deposit(){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Card
            bgcolor="primary"
            header="Create Account"
            status={status}
        >
            <Card.Header> Username </Card.Header>
            <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    
                    <Form.Group className="mb-3" controlId="Deposit Amount">
                        <Form.Label>Deposit Amount</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control 
                                type="number" 
                                placeholder="$0"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid amount to deposit.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Deposit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Deposit;
//-----------------------------