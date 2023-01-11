function createArrayOfSize(n) {
    return new Array(n).fill(0);
  }
  
  function Pagination({ currentPage, totalPages, handlePageChange }) {
    let pages = createArrayOfSize(totalPages).map((a, i) => {
      return (
        <button style={{border:"2px solid blue"}}
          onClick={() => handlePageChange(i + 1)}
          disabled={currentPage === i + 1}
          data-testid="page-btn"
        >
          {i + 1}
        </button>
      );
    });
    return <div>{pages}</div>;
  }
  
  export default Pagination;