import {React, useState, useContext } from 'react';
import { Card, Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataContext from '../Context';

function Withdraw({ balance }) {
  const [withdrawal, setWithdrawal] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const ctx = useContext(DataContext);

  let status = `Account Balance $ ${balance}`;

  const handleChange = e => {
    setIsValid(true);
    setWithdrawal(e.target.value);
  };

  const handleSubmit = (e) => {
    if (isNaN(withdrawal)) {
      alert("Please enter valid number to withdraw, cannot include non-number values.")
      setWithdrawal(0);
      setIsValid(false);
      return;
    }
    
    if (withdrawal < 0) {
      alert("Please enter valid number to withdraw, cannot include negative numbers.");
      setWithdrawal(0);
      setIsValid(false);
      return;
    }

    if (withdrawal > balance) {
      alert("Withdraw amount cannot exceed account balance.")
    } else {
      ctx.updateCtxBalance(withdrawal, "MINUS");
      alert('Your withdraw was successful.');
    }
    e.preventDefault();
  };

  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      status={status}
    >

      <Card.Header> Withdraw </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="withdraw amount">
            <h3> {status} </h3>
            <Form.Label> Please enter the amount you would like to withdraw. </Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="$0" min="0" onChange={handleChange} />
            </InputGroup>
          </Form.Group>
          <Button as="input" type="submit" disabled={!isValid} value="Make Withdraw"/>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Withdraw;