import React from 'react';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import General from './components/General';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import EducationEntries from './components/EducationEntries';
import PracticalEntries from './components/PracticalEntries';
function App() {
  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Col>
          <Card style={{ marginTop: '10px' }}>
            <Card.Body>
              <Card.Title>
                <h3>General Info</h3>
              </Card.Title>
              <General />
            </Card.Body>
          </Card>
          <EducationEntries />
        </Col>
        <Col>
          <PracticalEntries />
        </Col>
      </Container>
    </>
  );
}

export default App;
