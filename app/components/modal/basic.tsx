// components/ui/modal.tsx
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react"
import React, { Fragment, isValidElement, type ReactElement, type ReactNode } from "react"
import clsx from "clsx"
import {
  AiOutlineInfoCircle as InfoIcon,
  AiOutlineCheckCircle as SuccessIcon,
  AiOutlineWarning as WarningIcon,
  AiOutlineCloseCircle as DangerIcon,
  AiOutlineClose as CloseIcon,
} from "react-icons/ai"
import { Content, Footer } from "./slots"

type Variant = "default" | "info" | "success" | "warning" | "danger"

type Size = "sm" | "md" | "lg" | "xl"

const variantStyles: Record<Variant, string> = {
  default: "bg-white text-gray-900",
  info: "bg-blue-50 text-blue-900",
  success: "bg-green-50 text-green-900",
  warning: "bg-yellow-50 text-yellow-900",
  danger: "bg-red-50 text-red-900",
}

const sizeStyles: Record<Size, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
}

const variantIcons: Partial<Record<Variant, ReactNode>> = {
  info: <InfoIcon className="w-5 h-5 text-blue-500" />,
  success: <SuccessIcon className="w-5 h-5 text-green-500" />,
  warning: <WarningIcon className="w-5 h-5 text-yellow-500" />,
  danger: <DangerIcon className="w-5 h-5 text-red-500" />,
}

type ModalProps = {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  variant?: Variant
  size?: Size
  showCloseButton?: boolean
}

const Modal: React.FC<ModalProps> & {
  Footer: typeof Footer;
  Content: typeof Content;
} = ({
  open,
  onClose,
  title,
  children,
  variant = "default",
  size = "md",
  showCloseButton = true
}) => {
  const icon = variantIcons[variant]
  const childrenArray = React.Children.toArray(children);
  const getChildOfType = (type: any): ReactElement | undefined =>
    childrenArray.find(
      (child): child is ReactElement =>
        isValidElement(child) && child.type === type
    );
  const footer = getChildOfType(Footer);
  const content = getChildOfType(Content);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel
              className={clsx(
                "w-full transform overflow-hidden rounded-2xl p-6 shadow-xl transition-all",
                variantStyles[variant],
                sizeStyles[size]
              )}
            >
              {(title || showCloseButton) && (
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    {icon}
                    {title && (
                      <DialogTitle className="text-lg font-semibold">
                        {title}
                      </DialogTitle>
                    )}
                  </div>
                  {showCloseButton && (
                    <button
                      onClick={onClose}
                      className="text-gray-500 hover:text-gray-800 ml-4 text-xl leading-none"
                    >
                      <CloseIcon />
                    </button>
                  )}
                </div>
              )}
              {content}
              {footer}
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}

Modal.Footer = Footer;
Modal.Content = Content;

export default Modal;
