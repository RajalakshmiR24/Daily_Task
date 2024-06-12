import React from 'react';
import SubChildOne from './SubChildOne';

function ChildOne({ data }) {
  return (
    <div className="p-4 border mb-4">
      <h2 className="text-xl font-semibold">Child One</h2>
      <SubChildOne data={data} />
    </div>
  );
}

export default ChildOne;



