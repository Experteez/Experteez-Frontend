"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  company?: string;
  userToken?: string;
  mentorId?: string;
  subtitle?: string;
  imageURL?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  description?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  company,
  userToken,
  mentorId,
  subtitle,
  imageURL,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
  description,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-[45%] my-6 mx-auto h-auto">
          {/* CONTENT */}
          <div
            className={`translate duration-300 h-full 
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div className="translate h-auto border-0 rounded-lg shadow-lg relative flex flex-col gap-5 w-full bg-white outline-none focus:outline-none px-8 py-6">
              {/* HEADER */}
              <div className="flex items-start justify-between rounded-t relative">
                <div className="flex gap-12">
                  {imageURL && (
                    <div className="w-96 aspect-square bg-slate-300 rounded-full relative overflow-hidden">
                      <Image
                        src={imageURL ?? "/mentor/contact.svg"}
                        fill={true}
                        alt="profile"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-4">
                    <p className="text-2xl font-bold">{title}</p>
                    {subtitle && (
                      <p className="text-lg text-secondary">{subtitle}</p>
                    )}
                    {company && (
                      <p className="text-lg text-secondary">@{company}</p>
                    )}
                    {description && (
                      <p className="text-sm text-gray-500">{description}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1 hover:opacity-70 transition"
                >
                  <IoMdClose size={20} />
                </button>
              </div>
              {/* BODY */}
              {body && <div className="relative flex-auto">{body}</div>}
              {/* FOOTER */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-end gap-4 w-full">
                  {secondaryAction && secondaryActionLabel && (
                    <button
                      onClick={handleSecondaryAction}
                      className="bg-white text-[#FF6B2D] border border-[#FF6B2D] px-4 py-2 flex gap-2 items-center rounded-full font-normal"
                    >
                      {secondaryActionLabel}
                    </button>
                  )}
                  <button
                    onClick={handleSubmit}
                    className="bg-[#FF6B2D] text-white px-4 py-2 flex gap-2 items-center rounded-full font-normal"
                  >
                    <p>{actionLabel}</p>
                  </button>
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
