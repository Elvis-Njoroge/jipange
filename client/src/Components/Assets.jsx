import React, {useState} from 'react'
import { Container, Table, Form, Button, Row, Col } from 'react-bootstrap';

const Assets =()=>{

    const[name, setName]=useState('')
    const[category, setCategory]=useState('')
    const[location, setLocation]=useState('')
    const[value, setValue]=useState('')
    // const[assets,setAssets]=useState([])

    useEffect(()=>{
      fetch()
      .then((r)=>r.json())
      .then((data)=>{

      })
    },[])

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const requestBody= {
      asset:{
        name: name,
        category: category, 
        value: value, 
        location: location,
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
      alert(data.message);
      // setAssets([])
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };    


const assets=[
    {
        id:1,
        name:'kamulu land',
        location:'kamulu',
        category: 'land',
        value: 300000
    },
    {
        id:2,
        name:'The FrenchMans Coffer',
        location:'Westie',
        category: 'real estate',
        value: 1440000
    },
    {
        id:3,
        name:'Naivasha lake house',
        location:'Naivasha',
        category: 'real estate',
        value: 800000
    }
]

return(
    <>
    
    <div className='page-title'>
        <h1>Assets</h1>
    </div>
      <Container className="d-flex justify-content-center form-container">
        <Form className="my-form">
          <Row className="align-items-end">
            <Col>
              <Form.Group>
                <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="number" placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>
            <Col className="d-flex justify-content-center form-button">
              <Button variant="dark" type="submit">
                Add Asset
              </Button>
            </Col>
        </Form>
      </Container>
    <Container className="d-flex justify-content-center">
      <Table className="table-width">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Location</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td>{asset.name}</td>
              <td>{asset.category}</td>
              <td>{asset.location}</td>
              <td>{asset.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>  
    </>
)
}
export default Assets;