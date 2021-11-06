import React, { useContext, useRef } from 'react';
import AppContext from '../../store/app-context';
import TwoInputForm from '../InputForms/TwoInputForm';

const DegreeOfSeparation: React.FC = () => {
  const appCtx = useContext(AppContext);
  const user1Ref = useRef<HTMLInputElement>(null);
  const user2Ref = useRef<HTMLInputElement>(null);

  const findSeparationsHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!user1Ref.current || !user2Ref.current) return;
    appCtx.onSearch(user1Ref.current.value, user2Ref.current.value);
    user1Ref.current.value = '';
    user1Ref.current.blur();
    user2Ref.current.value = '';
    user2Ref.current.blur();
  };

  return (
    <div>
      <TwoInputForm
        title="Find Degree of Separation"
        subTitle="let's see how are they connected 🧐"
        onSubmitHandler={findSeparationsHandler}
        user1Ref={user1Ref}
        user1Placeholder="Person 1"
        user2Ref={user2Ref}
        user2Placeholder="Person 2"
        btnText="Search"
        hasReadonlyInput={false}
      />
    </div>
  );
};

export default DegreeOfSeparation;
