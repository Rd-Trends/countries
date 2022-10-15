import React, { useEffect, useState, memo } from "react";
import ReactPaginate from "react-paginate";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { countryDetails } from "../interfaces";
import { styles } from "../style";

interface paginationProps {
  page: string;
  setPage: (page: string) => void;
  allCountries: countryDetails[];
  itemsPerPage: number;
}

const Pagination = ({
  allCountries,
  itemsPerPage,
  setPage,
  page,
}: paginationProps) => {
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.

  useEffect(() => {
    setPageCount(Math.ceil(allCountries.length / itemsPerPage));
  }, [allCountries, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (selectedItem: { selected: number }) => {
    setPage((selectedItem.selected + 1).toString());
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<HiArrowSmRight className={` ${styles.elementTextColor} `} />}
      previousLabel={
        <HiArrowSmLeft className={` ${styles.elementTextColor}`} />
      }
      onPageChange={handlePageClick}
      // onPageActive={(e) => console.log("page active")}
      pageRangeDisplayed={2}
      marginPagesDisplayed={window.innerWidth > 600 ? 5 : 1}
      forcePage={Number(page) - 1}
      pageCount={pageCount}
      containerClassName={`flex items-center justify-between w-[600px] ${styles.elementTextColor} mx-auto max-w-[90vw] [&>*]:m-0 py-10`}
      pageClassName={`py-2 px-4  m-1 ${styles.elementBg} ${styles.elementTextColor} ${styles.boxShadow} rounded-sm hover:scale-110`}
      pageLinkClassName={` ${styles.elementTextColor}`}
      activeClassName={`bg-text-color dark:bg-dark-text-color scale-110`}
      activeLinkClassName={`text-element-bg dark:text-dark-element-bg`}
    />
  );
};

export default memo(Pagination);
