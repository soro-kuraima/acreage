import React from 'react';

import { useParams } from 'react-router-dom';

function Property() {
  const { id } = useParams();

  return (
    <div className="text-background-contrastText">
      property page
      {id}
    </div>
  );
}

export { Property };
