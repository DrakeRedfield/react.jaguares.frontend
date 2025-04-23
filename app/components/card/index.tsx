import React, { isValidElement, type HTMLAttributes, type PropsWithChildren, type ReactElement } from "react";
import { Body, Footer, Title, Actions, Image } from "./slots";
import clsx from "clsx";

const sizeStyles = {
  sm: "max-w-xs",    // ~20rem
  md: "max-w-md",    // ~28rem
  lg: "max-w-lg",    // ~32rem
  xl: "max-w-xl",    // ~36rem
  full: "max-w-full" // 100%
};

type CardProps = PropsWithChildren<{
  size?: keyof typeof sizeStyles;
}> &
  HTMLAttributes<HTMLDivElement>;

const Card: React.FC<CardProps> & {
  Title: typeof Title;
  Body: typeof Body;
  Footer: typeof Footer;
  Image: typeof Image;
  Actions: typeof Actions;
} = ({ children, className, size, ...restProps }) => {
  const childrenArray = React.Children.toArray(children);
  const getChildOfType = (type: any): ReactElement | undefined =>
    childrenArray.find(
      (child): child is ReactElement =>
        isValidElement(child) && child.type === type
    );

  const title = getChildOfType(Title);
  const body = getChildOfType(Body);
  const footer = getChildOfType(Footer);
  const image = getChildOfType(Image);
  const actions = getChildOfType(Actions);
  
  return (
    <div
      className={clsx(
        "w-full bg-white rounded-2xl p-6 shadow transition",
        sizeStyles[size ?? "full"],
        className
      )}
      {...restProps}
    >
      {image}
      {title}
      {body}
      {footer}
      {actions}
    </div>
  );
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;
Card.Image = Image;
Card.Actions = Actions;

export default Card;