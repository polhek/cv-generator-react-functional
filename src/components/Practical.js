import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import PracticalForm from './PracticalForm';
import PracticalView from './PracticalView';

const Practical = ({ deleteButton, id }) => {
  const [showGeneralForm, setShowGeneralForm] = useState(true);
  const [companyName, setcompanyName] = useState('');
  const [positionTitle, setpositionTitle] = useState('');
  const [tasks, settasks] = useState('');
  const [mainTasks, setmainTasks] = useState([]);
  const [dateFrom, setdateFrom] = useState('');
  const [dateTo, setdateTo] = useState('');
  const [validate, setValidate] = useState('');

  useEffect(() => {
    checkDate();
  }, [dateTo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate === false) {
      toggleShow();
      const tasksString = tasks.split(',');
      setmainTasks(tasksString);
    }
  };
  const toggleShow = () => {
    setShowGeneralForm(!showGeneralForm);
  };

  const checkDate = async (event) => {
    let d1 = new Date(dateFrom);
    let d2 = new Date(dateTo);

    if (d1.getTime() < d2.getTime()) {
      setValidate(false);
    } else {
      setValidate(true);
    }
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
          <h3>Practical Experience</h3>
        </Card.Title>
        {showGeneralForm ? (
          <PracticalForm
            companyName={companyName}
            positionTitle={positionTitle}
            tasks={tasks}
            mainTasks={mainTasks}
            dateFrom={dateFrom}
            dateTo={dateTo}
            validate={validate}
            handleSubmit={handleSubmit}
            checkDate={checkDate}
            setcompanyName={setcompanyName}
            setpositionTitle={setpositionTitle}
            settasks={settasks}
            setmainTasks={setmainTasks}
            setdateFrom={setdateFrom}
            setdateTo={setdateTo}
          />
        ) : (
          <PracticalView
            companyName={companyName}
            positionTitle={positionTitle}
            tasks={tasks}
            mainTasks={mainTasks}
            dateFrom={dateFrom}
            dateTo={dateTo}
            toggleShow={toggleShow}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default Practical;
