import React from 'react';

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <div className="border-t border-gray-300 py-8 text-center text-sm">
      © Copyright {new Date().getFullYear()} Kieran Proctor.
    </div>
  );
};

export default index;
