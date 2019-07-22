import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" />
      <Route parth="/movies/:id" />
    </div>
  );
};

export default App;
