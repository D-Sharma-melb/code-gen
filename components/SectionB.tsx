import React from "react";

type Props = {
  selectedStep: string | null;
  steps: { id: string; text: string }[];
  onUpdateText: (id: string, text: string) => void;
};

function SectionB({ selectedStep, steps, onUpdateText }: Props) {
  if (!selectedStep) {
    return (
      <>
      <h3 className="text-start mt-1">Text Area</h3>
      <textarea
        className="form-control"
        style={{ height: "70vh", resize: "none" }}
        placeholder={selectedStep ? "Start writing..." : "Select a step to start writing"}
        value="Add a step to start typing"
        onChange={selectedStep ? (e) => onUpdateText(selectedStep, e.target.value) : undefined}
        readOnly={!selectedStep}
      />
      </>
    );
  }

  const step = steps.find(s => s.id === selectedStep);

  return (
    
    <div className="m-1">
      <h3 className="text-start mb-1">Text Area</h3>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Enter step details..."
          id="floatingTextarea2"
          style={{ height: "70vh", resize: "none" }}
          value={step?.text || ""}
          onChange={(e) => onUpdateText(selectedStep, e.target.value)}
        />
        <label htmlFor="floatingTextarea2" >
          {selectedStep ? `Enter: ${selectedStep}` : "Enter step details"}
        </label>
      </div>
    </div>
  );
}
export default SectionB;