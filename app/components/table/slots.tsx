import clsx from "clsx";
import React from "react";

// Table Header
export const Head = ({ children }: React.PropsWithChildren) => (
  <thead className="text-xs text-gray-600 uppercase bg-gray-200">{children}</thead>
);

// Table Body
export const Body = ({ children }: React.PropsWithChildren) => (
  <tbody>{children}</tbody>
);

// Table Row
export const Row = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => (
  <tr className={clsx("border-b border-gray-200", className)}>
    {children}
  </tr>
);

// Table Cell
export const Cell = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => (
  <td className={clsx("px-6 py-4 whitespace-nowrap", className)}>{children}</td>
);

// Table CellHeader (th)
export const CellHeader = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => (
  <th scope="col" className={clsx("px-6 py-3 font-medium", className)}>
    {children}
  </th>
);
