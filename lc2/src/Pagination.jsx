import React from 'react';

const Pagination = ({ currentPage, goPrev, totalItems, goNext, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage !== 1;
  const isNextPageAvailable = currentPage !== Math.ceil(totalItems / itemsPerPage);
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
