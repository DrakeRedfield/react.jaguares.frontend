import React, { type HTMLAttributes, type PropsWithChildren } from 'react';
import { Body, Cell, CellHeader, Head, Row } from "./slots";
import { ActionsMenu, Content, Empty, Loading } from "./components";
import clsx from "clsx";

// Table props
type TableProps = PropsWithChildren<{
}> &
  HTMLAttributes<HTMLTableElement>;

const Table: React.FC<TableProps> & {
  Head: typeof Head;
  Body: typeof Body;
  Row: typeof Row;
  Cell: typeof Cell;
  CellHeader: typeof CellHeader;
  ActionsMenu: typeof ActionsMenu;
  Loading: typeof Loading;
  Empty: typeof Empty;
  Content: typeof Content;
} = ({ children, className, ...restProps }) => {
  return <>
    <table className={clsx("min-w-full text-sm text-left", className)} {...restProps}>{children}</table>
  </>
}

// Asign components to the Table object
Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
Table.CellHeader = CellHeader;
Table.ActionsMenu = ActionsMenu;
Table.Loading = Loading;
Table.Empty = Empty;
Table.Content = Content;

export default Table