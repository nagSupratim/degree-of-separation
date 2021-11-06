import React from 'react';
import { Alert, Card } from 'react-bootstrap';
import User from '../../../models/user';

const SingleUser: React.FC<{ user: User }> = (props) => {
  return (
    <Card bg="light">
      <Card.Body>{props.user.name}</Card.Body>
    </Card>
  );
};
export default SingleUser;
