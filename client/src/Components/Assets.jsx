import React from 'react'
import { Container, Table, Form, Button, Row, Col } from 'react-bootstrap';

const Assets =()=>{

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
                <Form.Control type="text" placeholder="Name"/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="text" placeholder="Category"/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="location" placeholder="Location"/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control type="number" placeholder="Value"/>
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