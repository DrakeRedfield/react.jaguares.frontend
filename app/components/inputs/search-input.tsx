import clsx from "clsx";
import React, { useEffect, useRef, useState, type HTMLProps } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators";

interface SearchInputProps extends HTMLProps<HTMLDivElement> {
  debounce?: boolean;
  onSearch: (value: string) => void;
  debounceTime?: number;
  placeholder?: string;
  minLength?: number;
}

export default function SearchInput({
  debounce = true,
  onSearch,
  debounceTime: debounceMs = 500,
  placeholder = "Buscar...",
  minLength = 3,
  className,
  ...restProps
}: SearchInputProps) {
  const [value, setValue] = useState("");
  const input$ = useRef(new Subject<string>());

  useEffect(() => {
    const subscription = input$.current
      .pipe(
        debounceTime(debounceMs),
        filter((val) => val.length >= minLength),
        distinctUntilChanged()
      )
      .subscribe((val) => {
        if (debounce) onSearch(val);
      });

    return () => subscription.unsubscribe();
  }, [debounce, debounceMs, minLength, onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    input$.current.next(val);
  };

  const handleManualSearch = () => {
    if (value.length >= minLength) {
      onSearch(value);
    }
  };

  return (
    <div className={clsx('flex gap-2 items-center', className)} {...restProps}>
      <div className="relative w-full">
        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
          <AiOutlineSearch className="w-4 h-4 text-gray-500" />
        </div>
        <input
          type="text"
          id="search-input"
          name="search-input"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="block py-1 ps-10 text-sm text-gray-900 border border-gray-300 w-full rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      {!debounce && (
        <button
          type="button"
          onClick={handleManualSearch}
          className="px-4 py-1 text-sm bg-(--blue-tkd) text-white rounded hover:bg-(--dark-blue-tkd) transition-colors duration-200"
        >
          Buscar
        </button>
      )}
    </div>
  );
};