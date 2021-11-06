import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const OneInputForm: React.FC<{
  title: string;
  subTitle: string;
  onSubmitHandler: (event: React.FormEvent) => void;
  userRef: React.Ref<HTMLInputElement>;
  placeholder: string;
  label: string;
  mutedText: string;
  btnText: string;
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
          <Form.Group className="mb-3">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
              type="text"
              placeholder={props.placeholder}
              ref={props.userRef}
            />
            <Form.Text className="text-muted">{props.mutedText}</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            {props.btnText}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default OneInputForm;
