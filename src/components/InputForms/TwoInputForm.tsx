import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const TwoInputForm: React.FC<{
  title: string;
  subTitle: string;
  onSubmitHandler: (event: React.FormEvent) => void;
  user1Ref: React.Ref<HTMLInputElement>;
  user1Placeholder: string;
  user2Ref: React.Ref<HTMLInputElement>;
  user2Placeholder: string;
  btnText: string;
  hasReadonlyInput: boolean;
}> = (props) => {
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
          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={props.user1Placeholder}
                  ref={props.user1Ref}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={props.user2Placeholder}
                  ref={props.user2Ref}
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
          <Button variant="primary" type="submit">
            {props.btnText}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TwoInputForm;
