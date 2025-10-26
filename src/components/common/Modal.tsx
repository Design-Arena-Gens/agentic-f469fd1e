"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import clsx from "clsx";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 22,
      stiffness: 180,
    },
  },
  exit: {
    opacity: 0,
    y: 24,
    scale: 0.96,
    filter: "blur(8px)",
    transition: { duration: 0.22 },
  },
};

export function Modal({ open, onClose, title, subtitle, className, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-8"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="modal-backdrop absolute inset-0"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.article
            role="dialog"
            aria-modal="true"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={clsx(
              "relative glass-panel max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/50 bg-white/30 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.18)] backdrop-blur-xl",
              className,
            )}
          >
            <button
              type="button"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/50 text-[#0f0f10]/70 transition hover:bg-white"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            {(title || subtitle) && (
              <header className="mb-6 pr-14">
                {title && (
                  <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#0f0f10]">
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="mt-2 text-base text-[#404046]">{subtitle}</p>
                )}
              </header>
            )}
            <div className="relative overflow-y-auto pr-2 text-[#141417] scrollbar-thin scrollbar-thumb-[#d96c28]/60 scrollbar-track-transparent">
              {children}
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
