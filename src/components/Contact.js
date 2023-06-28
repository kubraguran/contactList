import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Employes from './Employes';
import Emergency from './Emergency';

function Contact() {
  const [initialTab, setInitialTab] = useState('contact'); 

  useEffect(() => {
    setInitialTab('contact');
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col>
          <Tabs defaultActiveKey={initialTab} id="justify-tab-example" className="mb-3" justify>
            <Tab eventKey="contact" title="Contact List Of Employees">
              <Employes />
            </Tab>
            <Tab eventKey="emergency" title="Emergency Contact List">
              <Emergency />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
