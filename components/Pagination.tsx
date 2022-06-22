import React from "react";
import ReactPaginate from "react-paginate";
import ChevronLeftIcon from "@/public/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/public/icons/ChevronRightIcon";

type Props = {
  handlePageClick: (data: any) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageCount: number;
  total: number;
  page: number
};

const Pagination = ({ handlePageClick, setPage, pageCount, total, page }: Props) => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-center md:ml-80 lg:ml-40 lg:pb-20  items-center px-5 mt-5 justify-between">
      <p className="lg:block mr-4 hidden">{page} dari {total} Data</p>
      <ReactPaginate
        breakLabel="..."
        activeLinkClassName="active"
        nextLabel={<ChevronRightIcon />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<ChevronLeftIcon />}
        marginPagesDisplayed={1}
        containerClassName="flex pl-0 list-none rounded"
        previousClassName="list-item"
        nextClassName="list-item"
        disabledClassName="opacity-50"
        pageClassName="list-item"
        previousLinkClassName="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-1 py-1 border text-sm font-medium mr-2"
        nextLinkClassName="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-1 py-1 border text-sm font-medium ml-2"
        pageLinkClassName="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-3 py-1 border text-sm font-medium"
      />
      <form className="flex lg:ml-3 lg:mt-0 mt-5 gap-3 flex-row-reverse items-center">
        <select
          style={{ height: "31px" }}
          onChange={(e) => setPage(parseInt(e.target.value))}
          className="border  w-10"
          id="number"
          name="cars"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <p className="lg:hidden">100 dari 10 Data</p>
      </form>
    </div>
  );
};

export default Pagination;
