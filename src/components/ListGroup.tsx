import React, { Fragment } from 'react';

function ListGroup() {
  const items = [
    'Chicago',
    'New York',
    'Los Angeles',
    'Atlanta', 
    'Miami',
    'Houston',
    'Las Vegas'
  ];
  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (<li classname="list-group-item">{item}</li>))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;