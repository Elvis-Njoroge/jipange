import React, {useState}  from 'react';
import { Container, Table, Form, Button, Row, Col } from 'react-bootstrap';

const Expenses = () => {

    const[description, setDescription]=useState('')
    const[category, setCategory]=useState('')
    const[amount, setAmount]=useState('')
    const[date, setDate]=useState('')

  const expenses = [
    {
      id: 1,
      description: 'kfc',
      category: 'food',
      amount: 3000,
      date: new Date(),
    },
    {
      id: 2,
      description: 'Drinks',
      category: 'food',
      amount: 1440,
      date: new Date(),
    },
    {
      id: 3,
      description: 'Naivasha trip',
      category: 'recreational',
      amount: 80000,
      date: new Date(),
    },
  ];

  return (
    <>
      <div className='page-title'>
        <h1>Expenses</h1>
      </div>
      <Container className="d-flex justify-content-center form-container">
        <Form className="my-form">
          <Row className="align-items-end">
            <Col>
              <Form.Group>
                <Form.Control  onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="text"  onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="number"  onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="date"  onChange={(e) => setDate(e.target.value)} placeholder="Date" />
              </Form.Group>
            </Col>
          </Row>
            <Col className="d-flex justify-content-center form-button">
              <Button variant="dark" type="submit">
                Add Expense
              </Button>
            </Col>
        </Form>
      </Container>
      <Container className="d-flex justify-content-center">
        <Table className="table-width">
          <thead>
            <tr>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>{expense.value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Expenses;