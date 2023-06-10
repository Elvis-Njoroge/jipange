import React from 'react';
import { Container, Table, Form, Button, Row, Col } from 'react-bootstrap';

const Expenses = () => {
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
                <Form.Control type="text" placeholder="Description" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="text" placeholder="Category" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="number" placeholder="Amount" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="date" placeholder="Date" />
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