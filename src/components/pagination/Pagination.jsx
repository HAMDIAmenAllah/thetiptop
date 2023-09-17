import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


{/* <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} length={priceData.length} onPageChanged={onPageChanged} /> */ }

const Pagination = ({ currentPage, itemsPerPage, length, onPageChanged }) => {
  const pagesCount = Math.ceil(length / itemsPerPage);

  // console.log(pagesCount);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // console.log(pages);

  return (
    <div className="flex items-center justify-center px-4 py-3 md:px-6">
      <div className="flex flex-1 justify-center md:hidden">
        <button
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => onPageChanged(currentPage - 1)}
          disabled={currentPage === 1 ? true : false}
        >
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          Précédent
        </button>
        <button
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => onPageChanged(currentPage + 1)}
          disabled={currentPage === pagesCount ? true : false}
        >
          <span className="sr-only">Suivant</span>Suivant
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />

        </button>
      </div>
      <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              className="bg-white relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => onPageChanged(currentPage - 1)}
              disabled={currentPage === 1 ? true : false}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {pages.map(page => <button
              key={page}
              onClick={() => onPageChanged(page)}
              aria-current="page"
              className={"relative inline-flex items-center px-4 py-2 text-white text-sm font-semibold focus:z-20" + (currentPage === page ? "z-10  bg-greenTip " : " ring-1 ring-inset ring-gray-300 hover:bg-greenTipHover")}
            >
              {page}
            </button>)}
            <button
              className="bg-white relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => onPageChanged(currentPage + 1)}
              disabled={currentPage === pagesCount ? true : false}

            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

Pagination.getData = (items, currentPage, itemsPerPage) => {
  const start = currentPage * itemsPerPage - itemsPerPage;
  return items.slice(start, start + itemsPerPage);
}
export default Pagination