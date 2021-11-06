import React, { useContext, useRef } from 'react';
import AppContext from '../../store/app-context';
import TwoInputForm from '../InputForms/TwoInputForm';

const AddRelationship: React.FC = (props) => {
  const appCtx = useContext(AppContext);
  const user1Ref = useRef<HTMLInputElement>(null);
  const user2Ref = useRef<HTMLInputElement>(null);

  const newRelationshipEntryHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!user1Ref.current || !user2Ref.current) return;
    appCtx.onNewRelationshipEntry(
      user1Ref.current.value,
      user2Ref.current.value
    );
    user1Ref.current.value = '';
    user1Ref.current.blur();
    user2Ref.current.value = '';
    user2Ref.current.blur();
  };

  return (
    <TwoInputForm
      title="Add Relationships"
      subTitle="connect people together 🤝🏼"
      onSubmitHandler={newRelationshipEntryHandler}
      user1Ref={user1Ref}
      user1Placeholder="Person 1"
      user2Ref={user2Ref}
      user2Placeholder="Person 2"
      btnText="Add"
      hasReadonlyInput={true}
    />
  );
};

export default AddRelationship;
