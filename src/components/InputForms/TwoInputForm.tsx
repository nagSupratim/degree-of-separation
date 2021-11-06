import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import DropDown from '../DropDown';

const TwoInputForm: React.FC<{
  title: string;
  subTitle: string;
  onSubmitHandler: (event: React.FormEvent) => void;
  user1Ref: React.Ref<HTMLParagraphElement>;
  user1Placeholder: string;
  user2Ref: React.Ref<HTMLParagraphElement>;
  user2Placeholder: string;
  btnText: string;
  hasReadonlyInput: boolean;
  options: { value: string; label: string }[];
}> = (props) => {
  const [user1, setUser1] = useState<string>('');
  const [user2, setUser2] = useState<string>('');

  return (
    <Card className="h-100">
      <Card.Header>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subTitle}
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={props.onSubmitHandler}>
          <p className="d-none" ref={props.user1Ref}>
            {user1}
          </p>
          <p className="d-none" ref={props.user2Ref}>
            {user2}
          </p>
          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3">
                <DropDown
                  options={props.options}
                  placeholder={props.user1Placeholder}
                  onSelection={(user: { value: string; label: string }) => {
                    if (props.options.includes(user)) setUser1(user.value);
                    else setUser1('');
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3">
                <DropDown
                  options={props.options}
                  placeholder={props.user2Placeholder}
                  onSelection={(user: { value: string; label: string }) => {
                    if (props.options.includes(user)) setUser2(user.value);
                    else setUser2('');
                  }}
                />
              </Form.Group>
            </div>
          </div>
          {props.hasReadonlyInput && (
            <div className="row">
              <div className="col-12 col-md-6">
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Friend" readOnly />
                </Form.Group>
              </div>
            </div>
          )}
          <Button
            variant="primary"
            type="submit"
            disabled={user1 === '' || user2 === '' || user1 === user2}
          >
            {props.btnText}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TwoInputForm;
