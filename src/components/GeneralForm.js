import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const GeneralForm = ({
  fullName,
  setFullName,
  setEmail,
  setPhoneNumber,
  email,
  phoneNumber,
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Full name</Form.Label>
        <Form.Control
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          name="fullName"
          type="text"
          placeholder="Enter your full name"
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          value={email}
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicTelephone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="tel"
          value={phoneNumber}
          name="phoneNumber"
          placeholder="Enter phone number"
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

export default GeneralForm;
