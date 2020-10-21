import React, { useState } from 'react';
import EducationForm from './EducationForm';
import EducationView from './EducationView';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

const getDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  return today;
};

export const Education = ({ deleteButton, id }) => {
  //state management
  const [showGeneralForm, setShowGeneralForm] = useState(true);
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState(getDate());

  const handleSubmit = (event) => {
    event.preventDefault();
    // let educationItem = {
    //   id: uniqid(),
    //   School: schoolName,
    //   titleStudy: titleOfStudy,
    //   date: dateOfStudy,
    // };
    //addEducation(educationItem);

    toggleShow();
  };

  const toggleShow = () => {
    setShowGeneralForm(!showGeneralForm);
  };
  return (
    <Card style={{ marginTop: '10px' }}>
      <Card.Body>
        <Button
          onClick={() => deleteButton(id)}
          className="float-right"
          variant="primary"
          type="submit"
        >
          <AiFillDelete />
        </Button>
        <Card.Title>
          <h3>Educational Experience</h3>
        </Card.Title>
        {showGeneralForm ? (
          <EducationForm
            showGeneralForm={showGeneralForm}
            schoolName={schoolName}
            setSchoolName={setSchoolName}
            setTitleOfStudy={setTitleOfStudy}
            setDateOfStudy={setDateOfStudy}
            titleOfStudy={titleOfStudy}
            dateOfStudy={dateOfStudy}
            date={getDate}
            handleSubmit={handleSubmit}
          />
        ) : (
          <EducationView
            schoolName={schoolName}
            titleOfStudy={titleOfStudy}
            dateOfStudy={dateOfStudy}
            toggleShow={toggleShow}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default Education;
