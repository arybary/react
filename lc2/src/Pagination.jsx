import React from 'react';

const Pagination = ({ currentPage, goPrev, totalItems, goNext, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage !== 1;
  const isNextPageAvailable = currentPage !== Math.ceil(totalItems / itemsPerPage);
  return (
    <div class="pagination">
      <button class="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '←'}
      </button>
      <span class="pagination__page">{currentPage}</span>
      <button class="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
