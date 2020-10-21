import React, { useState } from 'react';
import GeneralForm from './GeneralForm';
import GeneralView from './GeneralView';

export const General = () => {
  const [showGeneralForm, setShowGeneralForm] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    toggleShow();
  };
  const toggleShow = () => {
    setShowGeneralForm(!showGeneralForm);
  };
  return showGeneralForm ? (
    <GeneralForm
      fullName={fullName}
      setFullName={setFullName}
      setEmail={setEmail}
      email={email}
      setPhoneNumber={setPhoneNumber}
      phoneNumber={phoneNumber}
      handleSubmit={handleSubmit}
    />
  ) : (
    <GeneralView
      fullName={fullName}
      email={email}
      phoneNumber={phoneNumber}
      toggleShow={toggleShow}
    />
  );
};

export default General;
