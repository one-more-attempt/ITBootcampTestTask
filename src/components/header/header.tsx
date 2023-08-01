import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks";
import { setCurrentPage, setPagination } from "../../store/reducers/dataSlice";
import { DataHook } from "../../api/APIHook";
import HeaderStyles from "./header.module.scss";

export const Header = () => {
  const paginationDataState = useAppSelector((state) => state.dataSliceReducer);
  const { isPaginationEnabled, currentPage } = paginationDataState;
  const { prevPage, nextPage, pagesArray } = DataHook();
  const dispatch = useAppDispatch();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const pageButtons =
    isPaginationEnabled && pagesArray.length > 1
      ? pagesArray.map((item, index) => (
          <button
            className={currentPage === index + 1 ? HeaderStyles.active : ""}
            key={index}
            onClick={() => {
              dispatch(setCurrentPage(index + 1));
            }}
          >
            {index + 1}
          </button>
        ))
      : null;

  const nextButton = isPaginationEnabled ? (
    <button
      disabled={!nextPage}
      onClick={() => {
        dispatch(setCurrentPage(currentPage + 1));
      }}
    >
      <span>{">>>"}</span>
    </button>
  ) : null;
  const prevButton = isPaginationEnabled ? (
    <button
      disabled={!prevPage}
      onClick={() => {
        dispatch(setCurrentPage(currentPage - 1));
      }}
    >
      {`<<<`}
    </button>
  ) : null;

  return (
    <div className={HeaderStyles.wrapper}>
      <div className={HeaderStyles.options}>
        <div>
          <input
            name="pagination"
            type="checkbox"
            checked={isPaginationEnabled}
            onChange={() => dispatch(setPagination(!isPaginationEnabled))}
          />
          <label htmlFor="pagination">Show pages</label>
        </div>
        <button onClick={scrollToTop}>To top</button>
      </div>
      <div className={HeaderStyles.navigate}>
        {prevButton}
        {nextButton}
      </div>
      <div className={HeaderStyles.pages}> {pageButtons}</div>
    </div>
  );
};
