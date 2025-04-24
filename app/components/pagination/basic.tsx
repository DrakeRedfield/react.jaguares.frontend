import clsx from "clsx";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  position?: "end" | "start" | "center";
};

export const Pagination = ({ currentPage, totalPages, onPageChange, position = 'end' }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={clsx('flex gap-1 items-center text-stone-500', `justify-${position}`)}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-0 rounded disabled:opacity-50 cursor-pointer"
      >
        <AiOutlineArrowLeft />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={clsx(
            "px-2 py-0 rounded hover:bg-(--light-blue-tkd) hover:text-white cursor-pointer",
            page === currentPage && "bg-(--blue-tkd) text-white"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded disabled:opacity-50 cursor-pointer"
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};
