import React from "react";
import ReactPaginate from "react-paginate";
import ChevronLeftIcon from "@/public/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/public/icons/ChevronRightIcon";
import Pagination  from "react-js-pagination";
type Props = {
  handlePageClick: (data: any) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageCount: number;
  total: number;
  page: number,
  currentPage: number
};


const PaginationE = ({ handlePageClick, setPage, pageCount, total, page, setCurrentPage, currentPage }: Props) => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-center md:ml-80 lg:ml-40 lg:pb-20  items-center px-5 mt-5 justify-between">
      <p className="lg:block mr-4 hidden">{page} dari {total} Data</p>
      <Pagination
   
        activePage={currentPage}
        nextPageText={<ChevronRightIcon />}
        prevPageText={<ChevronLeftIcon />}
        itemsCountPerPage={page}
        totalItemsCount={total}
        pageRangeDisplayed={3}
        onChange={handlePageClick}
        hideFirstLastPages={true}
        linkClass="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-3 py-1 border text-sm font-medium"
        activeClass="active"
        activeLinkClass="active"
        itemClass="list-item"
        itemClassLast="list-item"
        itemClassPrev="list-item"
        disabledClass="opacity-50"
        linkClassNext="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-1 py-1 border text-sm font-medium ml-2"
        linkClassPrev="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-1 py-1 border text-sm font-medium mr-2"
        innerClass="flex pl-0 list-none rounded"

      />
      <form className="flex lg:ml-3 lg:mt-0 mt-5 gap-3 flex-row-reverse items-center">
        <select
          style={{ height: "31px" }}
          onChange={(e) => {
            setPage(parseInt(e.target.value))
            setCurrentPage(1)
          }}
          className="border  w-10"
          id="number"
          name="cars"
        >
          <option defaultValue="5">5</option>
          <option defaultValue="10">10</option>
          <option disabled={total < 15} defaultValue="15">15</option>
        </select>
        <p className="lg:hidden">{page} dari {total} Data</p>
      </form>
    </div>
  );
};

export default PaginationE;
