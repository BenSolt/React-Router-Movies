import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

import {Route} from 'react-router-dom';
import MovieList from "./Movies/MovieList";


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>

     

      <SavedList list={savedList} />
      
      <MovieList/>
      <Route path="/Movies/MovieList"/>

      <Route path="/Movies/Movie/:id"/>

        
      

    </div>
  );
};

export default App;
