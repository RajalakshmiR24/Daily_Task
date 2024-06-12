import React from 'react';
import SubChildTwo from './SubChildTwo';

function ChildTwo({ data }) {
  return (
    <div className="p-4 border mb-4">
      <h2 className="text-xl font-semibold">Child Two</h2>
      <SubChildTwo data={data} />
    </div>
  );
}

export default ChildTwo;
