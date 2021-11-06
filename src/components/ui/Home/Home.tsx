import React, { useContext } from 'react';
import AppContext from '../../../store/app-context';
import AddPeople from '../../AddPeople/AddPeople';
import AddRelationship from '../../AddRelationship/AddRelationship';
import DegreeOfSeparation from '../../DegreeOfSeparation/DegreeOfSeparation';
import Output from '../../Output/Output';
import Alerts from '../Alerts/Alerts';
import NavBar from '../NavBar/NavBar';

const Home: React.FC = () => {
  const appCtx = useContext(AppContext);
  return (
    <>
      {appCtx.alert.hasAlert && (
        <Alerts
          variant={appCtx.alert.variant}
          description={appCtx.alert.description}
        />
      )}
      <NavBar />
      <div className="d-flex flex-column gap-4">
        <div className="row w-100 justify-content-between gap-4 gap-md-0">
          <div className="col-12 col-md-6">
            <AddPeople />
          </div>
          <div className="col-12 col-md-6">
            <AddRelationship />
          </div>
        </div>
        <div className="row w-100 justify-content-between">
          <div className="col">
            <DegreeOfSeparation />
          </div>
        </div>
        {appCtx.hasOutput && (
          <div className="row w-100 justify-content-between">
            <div className="col">
              <Output />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
