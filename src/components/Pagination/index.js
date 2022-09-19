import React, { useEffect, useState, memo } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import S from "./Pagination.module.css";

const Pagination = ({ allCountries, itemsPerPage, setPage, page }) => {
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.

  useEffect(() => {
    setPageCount(Math.ceil(allCountries.length / itemsPerPage));
  }, [allCountries, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<HiArrowSmRight />}
      onPageChange={handlePageClick}
      onPageActive={(e) => console.log("page active")}
      pageRangeDisplayed={2}
      marginPagesDisplayed={window.innerWidth > 600 ? 5 : 1}
      forcePage={page - 1}
      pageCount={pageCount}
      previousLabel={<HiArrowSmLeft />}
      renderOnZeroPageCount={null}
      containerClassName={S.pagination_wrapper}
      pageClassName={S.pagination_item}
      pageLinkClassName={S.pagination_link}
      activeClassName={S.pagination_item__active}
      activeLinkClassName={S.pagination_link__active}
    />
  );
};

Pagination.propTypes = {
  allCountries: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default memo(Pagination);
