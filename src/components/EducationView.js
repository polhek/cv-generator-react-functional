import React from 'react';
import Button from 'react-bootstrap/Button';
import { BsPencil } from 'react-icons/bs';

const EducationView = ({
  schoolName,
  titleOfStudy,
  dateOfStudy,
  toggleShow,
}) => {
  return (
    <div>
      <div>
        <h4>School name</h4>
        <p>{schoolName}</p>
        <h4>Title of Study</h4>
        <p>{titleOfStudy}</p>
        <h4>Date of Study</h4>
        <p>{dateOfStudy}</p>
      </div>
      <div style={{ display: 'flex' }}>
        <Button
          onClick={() => toggleShow()}
          text-align="center"
          variant="primary"
          type="submit"
          style={{ marginLeft: 'auto' }}
        >
          <BsPencil style={{ marginRight: '5px' }} />
          Edit Educational Info
        </Button>
      </div>
    </div>
  );
};

export default EducationView;
