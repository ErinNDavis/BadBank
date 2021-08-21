import {React, useState, useContext } from 'react';
import { Card, Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataContext from '../Context';
//import DataContext from '../App.js';

function Deposit({ balance }) {
  const [deposit, setDeposit] = useState(0);
  const [isValid, setIsValid] = useState(false);

  //------------
  const ctx = useContext(DataContext);
  console.log("++++++++");
  console.log(ctx);
  console.log("++++++++");
  //-------------

  let status = `Account Balance $ ${balance}`;
  
  const handleChange = e => {
    setIsValid(true);
    setDeposit(e.target.value);
  };

  const handleSubmit = (e) => {
    
    if (deposit == 0) {
      alert("Please enter how much you would like to deposit");
      setDeposit(0);
      setIsValid(false);
      return;
    }
    alert('Deposit was a success!');
    ctx.updateCtxBalance(deposit, "ADD");
    e.preventDefault();
  };

  return (

    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
    >

      <Card.Header> Deposit </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="deposit amount">
            <h3> {status} </h3>
            <Form.Label> Please enter the amount you would like to deposit. </Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="$0" min="0" onChange={handleChange} />
            </InputGroup>
          </Form.Group>
          <Button as="input" type="submit" disabled={!isValid} value="Deposit"/>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Deposit;
