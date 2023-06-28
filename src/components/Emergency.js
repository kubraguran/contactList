import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


//when mamnager login add the manager contact list 

function Emergency() {
  return (
<Container>
<Row className="justify-content-md-center gap-5">
        <Col xs={6} md="auto">
        <Card border="light" className='emergency' style={{ width: '25rem' }}>
        <Card.Header>Call 1</Card.Header>
        <Card.Body>
          <Card.Title>Details of emergency call</Card.Title>
          <Card.Text>
            you can call this number this reason....
          </Card.Text>
          <Button variant="danger" >
                Call
              </Button>
        </Card.Body>
      </Card>
        </Col>
        <Col xs={6}  md="auto" >
        <Card border="light" className='emergency' style={{ width: '25rem' }}>
        <Card.Header>Call 2</Card.Header>
        <Card.Body>
          <Card.Title>Details of emergency call</Card.Title>
          <Card.Text>
            you can call this number this reason....
          </Card.Text>
          <Button variant="danger" >
                Call
              </Button>
        </Card.Body>
      </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center gap-5">
        <Col xs={6} md="auto">
        <Card border="light" className='emergency' style={{ width: '25rem' }}>
        <Card.Header>Call 3</Card.Header>
        <Card.Body>
          <Card.Title>Details of emergency call</Card.Title>
          <Card.Text>
            you can call this number this reason....
          </Card.Text>
           <Button variant="danger" >
                Call
              </Button>
        </Card.Body>
      </Card>
        </Col>
        <Col xs={6}  md="auto" >
        <Card border="light" className='emergency' style={{ width: '25rem' }}>
        <Card.Header>Call 4</Card.Header>
        <Card.Body>
          <Card.Title>Details of emergency call</Card.Title>
          <Card.Text>
            you can call this number this reason....
          </Card.Text>
          <Button variant="danger" >
                Call
              </Button>
        </Card.Body>
      </Card>
        </Col>
      </Row><Row className="justify-content-md-center gap-5">
        <Col xs={6} md="auto">
        <Card border="light" className='emergency' style={{ width: '25rem' }}>
        <Card.Header>Call 5</Card.Header>
        <Card.Body>
          <Card.Title>Details of emergency call</Card.Title>
          <Card.Text>
            you can call this number this reason....
          </Card.Text>
          <Button variant="danger" >
                Call
              </Button>
        </Card.Body>
      </Card>
        </Col>
        <Col xs={6}  md="auto" >
        <Card border="light" className='emergency' style={{ width: '25rem' }}>
        <Card.Header>Call 6</Card.Header>
        <Card.Body>
          <Card.Title>Details of emergency call</Card.Title>
          <Card.Text>
            you can call this number this reason....
          </Card.Text>
          <Button variant="danger">
                Call
            </Button>
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Emergency