import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Budget = () => {
    const[description, setDescription]=useState('')
    const[duration, setDuration]=useState('')
    const[amount, setAmount]=useState('')

  const [showForm, setShowForm] = useState(false);

    const budgets=[
        {
            id: 1,
            description:'weekly budget',
            duration: 1,
            amount: 3000,
        },
        {
            id: 2,
            description:'monthly',
            duration: 1,
            amount: 3000,    
        },
        {
            id: 3,
            description:'daily budget',
            duration:2,
            amount: 80000,
        },
        {
            id: 4,
            description:'3 month budget',
            duration:2,
            amount: 80000,
        },
        {
            id: 5,
            description:'6 month budget',
            duration:2,
            amount: 80000,
        }
    ]

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
 
  };

  return (
    <>
      <div className='page-title'>
        <h1>Budget</h1>
      </div>
        <div className='add-container'>
            <p>Create a new Budget
            <Button className="add-button" onClick={toggleForm}>
            <AddCircleIcon />
            </Button>
            </p>
        </div>
      {showForm && (
      <Container className="d-flex justify-content-center form-container">
        <Form className="my-form">
          <Row className="align-items-end">
            <Col>
              <Form.Group>
                <Form.Control type="text" placeholder=" Description" onChange={(e) => setDescription(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="text" placeholder="Duration" onChange={(e) => setDuration(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>
            <Col className="d-flex justify-content-center form-button">
              <Button variant="dark" type="submit">
                Create Budget
              </Button>
            </Col>
        </Form>
      </Container>
      )}
      <Container fluid style={{ width: '85%' }}>
        <Row>
          {budgets.map((budget) => (
            <Col key={budget.id} md={4}>
              <div className="card">
                <h5>{budget.description}</h5>
                <h6>{budget.duration}</h6>
                <h6>{budget.amount}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Budget;