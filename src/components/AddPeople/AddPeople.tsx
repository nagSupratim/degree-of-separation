import React, { useContext, useRef } from 'react';
import User from '../../models/user';
import AppContext from '../../store/app-context';
import OneInputForm from '../InputForms/OneInputForm';

const AddPeople: React.FC = () => {
  const appCtx = useContext(AppContext);
  const userNameRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userNameRef.current) return;
    appCtx.onNewUserEntry(new User(userNameRef.current.value));
    userNameRef.current.value = '';
    userNameRef.current.blur();
  };

  return (
    <OneInputForm
      title="Add People"
      subTitle="expand your community 🌏"
      onSubmitHandler={formSubmitHandler}
      userRef={userNameRef}
      placeholder="Enter Name"
      label="Name"
      mutedText="You must have a unique name"
      btnText="Add"
    />
  );
};

export default AddPeople;
