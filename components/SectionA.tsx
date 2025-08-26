import React, { useState } from "react";

type Step = { id: string; text: string };

type Props = {
  steps: Step[];
  selectedStep: string | null;
  onAdd: () => void;
  onDelete: () => void;
  onSelect: (id: string) => void;
  onRename: (oldId: string, newId: string) => void;
};

function SectionA({
  steps,
  selectedStep,
  onAdd,
  onDelete,
  onSelect,
  onRename,
}: Props) {

  const [editingStep, setEditingStep] = useState<string | null>(null);
  const [tempName, setTempName] = useState("");

  const handleDoubleClick = (id: string) => {
    const index = steps.findIndex((step) => step.id === id);
    setEditingStep(id);
    setTempName(`Step ${index + 1}`); 
  };

  const finishEditing = (oldId: string) => {
    if (tempName.trim() && tempName !== oldId) {
      onRename(oldId, tempName.trim());
    }
    setEditingStep(null);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-1">
      <h3 className="mb-3">Steps</h3>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-dark" onClick={onAdd}>
          Add
        </button>
        <button className="btn btn-dark" onClick={onDelete}>
          Delete
        </button>
      </div>

      <div className="d-flex flex-column align-items-center gap-2 w-50">
        {steps.map((step) => (
          <div key={step.id} className="w-100 text-center">
            {editingStep === step.id ? (
              <input
                className="form-control"
                autoFocus
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                onBlur={() => finishEditing(step.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") finishEditing(step.id);
                  if (e.key === "Escape") setEditingStep(null);
                }}
              />
            ) : (
              <button
                className={`btn w-100 ${
                  selectedStep === step.id ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => onSelect(step.id)}
                onDoubleClick={() => handleDoubleClick(step.id)}
              >
                {step.id}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionA;
