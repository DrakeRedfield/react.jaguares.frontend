import type { PropsWithChildren } from "react";

// Slot: Title
export const Title: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="text-xl font-semibold mb-2">{children}</div>
);

// Slot: Body
export const Body: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="text-base">{children}</div>
);

// Slot: Footer
export const Footer: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="mt-4 pt-2 border-t text-sm opacity-80">{children}</div>
);

// Slot: Image
export const Image: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full rounded-t-2xl object-cover h-48" />
);

// Slot: Actions (e.g., buttons)
export const Actions: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="mt-4 flex gap-2 justify-end">{children}</div>
);