import React from 'react';

function SubChildTwo({ data }) {
  return (
    <div className="mt-2 p-2 bg-gray-100">
      <p className="text-lg">Sub Child Two received: {data}</p>
    </div>
  );
}

export default SubChildTwo;
