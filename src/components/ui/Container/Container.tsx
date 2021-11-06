import React from 'react';

const Container: React.FC = (props) => {
  return <div className="container-sm my-4">{props.children}</div>;
};

export default Container;
