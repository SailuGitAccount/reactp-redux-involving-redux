import React from 'react';
import Form from '../Form/Form';
import ShipList from '../ShipList/ShipList';
import '../../index.css';
import UserPosts from '../general-pages/UserPosts';

const App = () => {
  return (
    <div className="container">
      <h2>hello</h2>
      <Form />
      <ShipList />

      <UserPosts />
    </div>
  );
};

export default App;
