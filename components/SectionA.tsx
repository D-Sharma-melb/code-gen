import React from "react";

type Props = {
  steps: { id: string; text: string }[];
  selectedStep: string | null;
  onAdd: () => void;
  onDelete: () => void;
  onSelect: (id: string) => void;
};

function SectionA({ steps, selectedStep, onAdd, onDelete, onSelect }: Props) {
  return (
    <>
        <div className="d-flex flex-column align-items-center mt-1">
        <h3 className="mb-3">Steps</h3>

        <div className="d-flex gap-2 mb-3">
        <button className="btn btn-dark" onClick={onAdd}>Add</button>
        <button className="btn btn-dark" onClick={onDelete}>Delete</button>
        </div>

        <div className="d-flex flex-column align-items-center gap-2 w-100">
        {steps.map(step => (
        <button
        key={step.id}
        className={`btn ${selectedStep === step.id ? "btn-primary" : "btn-outline-dark"}`}
        onClick={() => onSelect(step.id)}
        >
        {step.id}
        </button>
        ))}
        </div>
        </div>
    </>
  );
}

export default SectionA;
