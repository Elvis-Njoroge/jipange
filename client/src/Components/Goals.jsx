import React,{useState} from 'react'
import { Container, Row, Col, Button, Form, ProgressBar } from 'react-bootstrap';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Goals =()=>{
    const[description, setDescription]=useState('')
    const[duration, setDuration]=useState('')
    const[amount, setAmount]=useState('')
    const[deadline, setDeadline]=useState('')
    // const[goals,setGoals]=useState([])

  const toggleForm = () => {
      setShowForm(!showForm);
  };

  const [showForm, setShowForm] = useState(false);
  const now = 40;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody= {
      goal:{
        description: description,
        duration: duration, 
        amount: amount, 
        deadline: deadline,
      },
    };

    fetch(``, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      // setGoals(data)
      alert(data.message);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };  

  const goals=[
      {
          id: 1,
          description:'buy a car',
          duration: 1,
          amount: 3000,
          deadline: new Date(),
          progress: 10
      },
      {
          id: 2,
          description:'get a house',
          duration: 1,
          amount: 3000,
          deadline: new Date(),
          progress: 10
        
      },
      {
          id: 3,
          description:'go to spain',
          duration:2,
          amount: 80000,
          deadline: new Date(),
          progress: 10
      },
      {
          id: 4,
          description:'get a bike',
          duration:2,
          amount: 80000,
          deadline: new Date(),
          progress: 10
      },
      {
          id: 5,
          description:'pay for my masters',
          duration:2,
          amount: 80000,
          deadline: new Date(),
          progress: 10
      },
      {
          id:6,
          description:'get a boat',
          duration:2,
          amount: 80000,
          deadline: new Date(),
          progress: 10
      },
      {
          id:7,
          description:'buy a rental property',
          duration:2,
          amount: 80000,
          deadline: new Date(),
          progress: 10
      },
      {
          id:8,
          description:'go on a vacation',
          duration:2,
          amount: 80000,
          deadline: new Date(),
          progress: 10
      }
  ]

return(
    <>
    <div className='page-title'>
        <h1>Goals</h1>
    </div>
    <div className='add-container'>
    <p>Add a new goal
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
                <Form.Control type="text"  onChange={(e) => setDescription (e.target.value)} placeholder=" Description" value={description}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="text"  onChange={(e) => setDuration(e.target.value)} placeholder="Duration" value={duration}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="number"  onChange={(e) => setAmount(e.target.value)} placeholder="Amount" value={amount}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="date"  onChange={(e) => setDeadline(e.target.value)} placeholder="Deadline" value={deadline}/>
              </Form.Group>
            </Col>
          </Row>
            <Col className="d-flex justify-content-center form-button">
              <Button variant="dark" type="submit">
                Add Goal
              </Button>
            </Col>
        </Form>
      </Container>
      )}
      <Container fluid style={{width:'85%'}}>
        <Row>
          {goals.map((goal) => (
            <Col key={goal.id} md={4}>
              <div className="card">
                <h6>{goal.description}</h6>
                <h6>{goal.duration}</h6>
                <h6>{goal.amount}</h6>
                <h6>{goals.deadline}</h6>
                <div>
                </div>
                    <ProgressBar now={now} label={`${now}%`} visuallyHidden />
                </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
)
}
export default Goals;