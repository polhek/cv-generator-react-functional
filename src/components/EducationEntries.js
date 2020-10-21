import React, { useState } from 'react';
import Education from './Education';
import { Button } from 'react-bootstrap';
import uniqid from 'uniqid';

const EducationEntries = () => {
  const [countEducation, setcountEducation] = useState(1);
  const [educationList, setEducationList] = useState([
    { id: uniqid(), name: `${countEducation}-name` },
  ]);

  const addEducation = () => {
    let education = { id: uniqid(), name: `${countEducation}-name` };
    setEducationList((oldArray) => [...oldArray, education]);
  };

  const addCount = () => {
    setcountEducation((countEducation) => countEducation + 1);
  };

  const deleteButtonLogic = (id) => {
    const newArray = educationList.filter((item) => item.id !== id);
    setEducationList(newArray);
  };

  return (
    <>
      {educationList.map((education) => {
        return (
          <Education
            key={education.id}
            id={education.id}
            educationName={education.name}
            deleteButton={deleteButtonLogic}
          />
        );
      })}
      <div className="text-center">
        <Button
          onClick={() => {
            addCount();
            addEducation();
          }}
          variant="primary"
          type="submit"
          style={{ marginTop: '10px' }}
        >
          Add education
        </Button>
      </div>
    </>
  );
};

export default EducationEntries;
