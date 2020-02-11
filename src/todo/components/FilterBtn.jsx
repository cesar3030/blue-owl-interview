import React from 'react';

function FilterBtn({ children, type, handleClick, selectedFilter }) {
  const classNameArr = ['btn', 'btn-light'];
  if (type === selectedFilter) {
    classNameArr.push('active');
  }

  return (
    <button
      type='button'
      className={classNameArr.join(' ')}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default FilterBtn;
