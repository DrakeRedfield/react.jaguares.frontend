import clsx from "clsx";
import React from "react";

// Modal Header
export const Footer = ({ children, className = '' }: React.PropsWithChildren<{className?: string}>) => (
  <div className={clsx('mt-6', className)}>{children}</div>
);

export const Content = ({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={clsx('mt-4', className)}>{children}</div>
);