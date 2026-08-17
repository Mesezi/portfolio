'use client'
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  problem?: string;
  role?: string;
  keyDecisions?: string[];
  outcome?: string;
  retrospective?: string;
}

const CaseStudyModal = ({
  isOpen,
  onClose,
  title,
  problem,
  role,
  keyDecisions,
  outcome,
  retrospective,
}: CaseStudyModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-[90%] max-w-lg max-h-[80vh] overflow-y-auto p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#272727]/60 hover:text-[#272727]"
          aria-label="Close case study"
        >
          <IoClose size={22} />
        </button>

        <h3 className="text-xl font-semibold pr-8">{title}</h3>

        <div className="mt-5 flex flex-col gap-4">
          {problem && (
            <div>
              <h5 className="font-semibold text-sm uppercase tracking-wide text-[#272727]/70">
                Problem
              </h5>
              <p className="text-sm mt-1">{problem}</p>
            </div>
          )}

          {role && (
            <div>
              <h5 className="font-semibold text-sm uppercase tracking-wide text-[#272727]/70">
                My Role
              </h5>
              <p className="text-sm mt-1">{role}</p>
            </div>
          )}

          {keyDecisions && keyDecisions.length > 0 && (
            <div>
              <h5 className="font-semibold text-sm uppercase tracking-wide text-[#272727]/70">
                Key Decisions
              </h5>
              <ul className="list-disc list-inside mt-1">
                {keyDecisions.map((decision, i) => (
                  <li key={i} className="text-sm">
                    {decision}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {outcome && (
            <div>
              <h5 className="font-semibold text-sm uppercase tracking-wide text-[#272727]/70">
                Outcome
              </h5>
              <p className="text-sm mt-1">{outcome}</p>
            </div>
          )}

          {retrospective && (
            <div>
              <h5 className="font-semibold text-sm uppercase tracking-wide text-[#272727]/70">
                What I'd Do Differently
              </h5>
              <p className="text-sm mt-1 italic">{retrospective}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
