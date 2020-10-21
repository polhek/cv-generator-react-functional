import React, { useState } from 'react';
import Practical from './Practical';
import uniqid from 'uniqid';
import { Button } from 'react-bootstrap';

const PracticalEntries = () => {
  const [countPractical, setCountPractical] = useState(1);
  const [practicalList, setPracticalList] = useState([
    {
      id: uniqid(),
      name: `${countPractical}-name`,
    },
  ]);

  const addPractical = () => {
    let practical = { id: uniqid(), name: `${countPractical}-name` };
    setPracticalList((oldArray) => [...oldArray, practical]);
  };

  const deleteButtonLogic = (id) => {
    const newArray = practicalList.filter((item) => item.id !== id);
    setPracticalList(newArray);
  };

  const addCount = () => {
    setCountPractical((countPractical) => countPractical + 1);
  };

  return (
    <>
      {practicalList.map((practical) => {
        return (
          <Practical
            key={practical.id}
            id={practical.id}
            practicalName={practical.name}
            deleteButton={deleteButtonLogic}
          />
        );
      })}
      <div className="text-center">
        <Button
          onClick={() => {
            addCount();
            addPractical();
          }}
          variant="primary"
          type="submit"
          style={{ marginTop: '10px' }}
        >
          Add Practical
        </Button>
      </div>
    </>
  );
};

export default PracticalEntries;
