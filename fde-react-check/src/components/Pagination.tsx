interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  isLoading,
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1 || isLoading}
        aria-label="Previous page"
      >
        ← Previous
      </button>

      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages || isLoading}
        aria-label="Next page"
      >
        Next →
      </button>
    </div>
  );
}
