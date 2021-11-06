import React, { useContext, useRef } from 'react';
import AppContext from '../../store/app-context';
import TwoInputForm from '../InputForms/TwoInputForm';

const DegreeOfSeparation: React.FC = () => {
  const appCtx = useContext(AppContext);
  const user1Ref = useRef<HTMLParagraphElement>(null);
  const user2Ref = useRef<HTMLParagraphElement>(null);
  const options = appCtx.users.map((user) => ({
    value: user.name,
    label: user.name,
  }));

  const findSeparationsHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      !user1Ref.current ||
      !user2Ref.current ||
      !user1Ref.current.textContent ||
      !user2Ref.current.textContent
    )
      return;
    appCtx.onSearch(user1Ref.current.textContent, user2Ref.current.textContent);
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
        options={options}
      />
    </div>
  );
};

export default DegreeOfSeparation;
