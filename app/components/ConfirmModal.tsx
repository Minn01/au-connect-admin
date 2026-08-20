"use client";

import { useEffect, useId, useRef } from "react";
import { AlertTriangle, X } from "lucide-react";

type ConfirmModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmForm?: string;
  isConfirming?: boolean;
  tone?: "danger" | "warning";
  onConfirm?: () => void;
  onClose: () => void;
};

export default function ConfirmModal({
  isOpen,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  confirmForm,
  isConfirming = false,
  tone = "danger",
  onConfirm,
  onClose,
}: ConfirmModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocusedElement = document.activeElement as HTMLElement | null;
    cancelButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !isConfirming) {
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement?.focus();
    };
  }, [isConfirming, isOpen]);

  if (!isOpen) return null;

  const isDanger = tone === "danger";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/45 px-4 py-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !isConfirming) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
      >
        <div className="flex items-start gap-4">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
              isDanger ? "bg-red-100 text-red-600" : "bg-amber-100 text-amber-600"
            }`}
          >
            <AlertTriangle className="h-5 w-5" aria-hidden="true" />
          </div>

          <div className="min-w-0 flex-1">
            <h2 id={titleId} className="text-lg font-semibold text-slate-950">
              {title}
            </h2>
            <p id={descriptionId} className="mt-2 text-sm leading-6 text-slate-600">
              {description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isConfirming}
            aria-label="Close confirmation"
            className="rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            ref={cancelButtonRef}
            type="button"
            onClick={onClose}
            disabled={isConfirming}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {cancelLabel}
          </button>
          <button
            type={confirmForm ? "submit" : "button"}
            form={confirmForm}
            onClick={onConfirm}
            disabled={isConfirming}
            className={`rounded-lg px-4 py-2 text-sm font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-60 ${
              isDanger
                ? "bg-red-600 hover:bg-red-700 focus-visible:ring-red-300"
                : "bg-amber-600 hover:bg-amber-700 focus-visible:ring-amber-300"
            }`}
          >
            {isConfirming ? "Please wait..." : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
