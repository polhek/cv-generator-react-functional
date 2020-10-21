import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EducationForm = ({
  showGeneralForm,
  schoolName,
  setSchoolName,
  setTitleOfStudy,
  setDateOfStudy,
  titleOfStudy,
  dateOfStudy,
  date,
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicSchoolName">
        <Form.Label>School name</Form.Label>
        <Form.Control
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          name="schoolName"
          type="text"
          placeholder="Enter your school name"
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title of Study</Form.Label>
        <Form.Control
          onChange={(e) => setTitleOfStudy(e.target.value)}
          type="text"
          name="titleOfStudy"
          value={titleOfStudy}
          placeholder="Enter the title of your study"
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicDate">
        <Form.Label>Date of Study</Form.Label>
        <Form.Control
          onChange={(e) => setDateOfStudy(e.target.value)}
          type="date"
          value={dateOfStudy}
          name="dateOfStudy"
          required
        />
      </Form.Group>
      <div style={{ display: 'flex' }}>
        <Button variant="primary" type="submit" style={{ marginLeft: 'auto' }}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default EducationForm;
