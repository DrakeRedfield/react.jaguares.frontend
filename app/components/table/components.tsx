import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import clsx from "clsx";
import { AiOutlineMore } from "react-icons/ai";

// Table Actions Menu
export const ActionsMenu = ({ actions }: { actions: { label: string; onClick: () => void }[] }) => (
  <Menu as="div" className="relative inline-block text-left">
    <MenuButton className="p-1 rounded-full hover:bg-gray-100">
      <AiOutlineMore className="w-5 h-5 text-gray-600" />
    </MenuButton>

    <Transition
      as={React.Fragment}
      enter="transition ease-out duration-100"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
        {actions.map((action, index) => (
          <MenuItem key={index}>
            {({ active }) => (
              <button
                onClick={action.onClick}
                className={clsx(
                  "w-full px-4 py-2 text-sm text-left",
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                )}
              >
                {action.label}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Transition>
  </Menu>
);

// Table Loading
export const Loading = ({cols = 3, rows = 3}: {cols?: number, rows?: number}) => (
  <>
    {Array.from({ length: rows }).map((_, index) => (
      <tr key={index} className="animate-pulse">
        {Array.from({ length: cols }).map((_, i) => (
          <td key={i} className="px-6 py-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </td>
        ))}
      </tr>
    ))}
  </>
)

// Table Empty
export const Empty = ({ colSpan = 3, message = "Sin resultados" }: { colSpan?: number, message: string }) => (
  <tr className="text-center">
    <td colSpan={colSpan} className="px-6 py-4 text-gray-500">
      {message}
    </td>
  </tr>
);

// Table Content Wrapper with loading/empty logic
export const Content = <T,>({
  data,
  isLoading,
  renderRow,
  colSpan,
  emptyMessage = "Sin resultados",
  loadingRows = 3,
}: {
  data: T[];
  isLoading: boolean;
  renderRow: (item: T, index: number) => React.ReactNode;
  colSpan: number;
  emptyMessage?: string;
  loadingRows?: number;
}) => {
  if (isLoading) return <Loading cols={colSpan} rows={loadingRows} />;
  if (data.length === 0) return <Empty colSpan={colSpan} message={emptyMessage} />;
  return <>{data.map(renderRow)}</>;
};
