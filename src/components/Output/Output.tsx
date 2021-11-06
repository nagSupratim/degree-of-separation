import React, { useContext } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import AppContext from '../../store/app-context';
import OutputSingleRow from './OutputSingleRow/OutputSingleRow';

const Output: React.FC<{}> = () => {
  const appCtx = useContext(AppContext);
  return (
    <Card>
      <Card.Header>
        <Card.Title>Result</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          how {appCtx.searchedUsers.join(' and ')} are related? 🤨
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <ListGroup as="ul">
          {appCtx.output.length === 0 ? (
            <Card>
              <Card.Body className="text-danger">
                They Are not related yet 😟
              </Card.Body>
            </Card>
          ) : (
            appCtx.output.map((users, i) => (
              <OutputSingleRow users={users} key={i} />
            ))
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
export default Output;
