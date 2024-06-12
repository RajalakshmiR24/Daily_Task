import React from 'react';

function SubChildOne({ data }) {
  return (
    <div className="mt-2 p-2 bg-gray-100">
      <p className="text-lg">Sub Child One received: {data}</p>
    </div>
  );
}

export default SubChildOne;