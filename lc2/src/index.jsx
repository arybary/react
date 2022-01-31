import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const rootElement = document.querySelector('#root');

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-5',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-6',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-8',
    age: 18,
    name: 'Tad',
  },
];

ReactDOM.render(<UsersList users={users} />, rootElement);
