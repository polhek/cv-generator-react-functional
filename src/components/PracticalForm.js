import React from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PracticalForm = ({
  companyName,
  positionTitle,
  tasks,
  mainTasks,
  dateFrom,
  toggleShow,
  dateTo,
  validate,
  handleSubmit,
  setcompanyName,
  setpositionTitle,
  settasks,
  setmaintasks,
  setdateFrom,
  setdateTo,
  checkDate,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicCompanyName">
        <Form.Label>Company name</Form.Label>
        <Form.Control
          value={companyName}
          onChange={(e) => setcompanyName(e.target.value)}
          name="companyName"
          type="text"
          placeholder="Enter the company you worked in"
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicPositionTitle">
        <Form.Label>Position title</Form.Label>
        <Form.Control
          value={positionTitle}
          onChange={(e) => setpositionTitle(e.target.value)}
          name="positionTitle"
          type="text"
          placeholder="Enter the position you had in a company"
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicCompanyTasks">
        <Form.Label>Tasks in company</Form.Label>
        <Form.Control
          value={tasks}
          onChange={(e) => settasks(e.target.value)}
          name="tasks"
          type="text"
          placeholder="Enter the tasks you had in a company"
          required
        />
        <Form.Text className="text-muted">
          Example: Programming, cooking, dancing, ...
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicDateFrom">
        <Form.Label>Worked from</Form.Label>
        <Form.Control
          onChange={(e) => {
            //checkDate();
            setdateFrom(e.target.value);
          }}
          type="date"
          defaultValue={dateFrom}
          name="dateFrom"
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicDateUntil">
        <Form.Label>Worked to</Form.Label>
        <Form.Control
          isInvalid={validate}
          onChange={(e) => {
            //checkDate();
            setdateTo(e.target.value);
          }}
          type="date"
          value={dateTo}
          name="dateTo"
          required
        />
        <Form.Control.Feedback type="invalid">
          Date must be later then date from when you worked...
        </Form.Control.Feedback>
      </Form.Group>
      <div style={{ display: 'flex' }}>
        <Button variant="primary" type="submit" style={{ marginLeft: 'auto' }}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default PracticalForm;
