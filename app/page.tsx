"use client";
import SectionA from "@/components/SectionA";
import SectionB from "@/components/SectionB";
import SectionC from "@/components/SectionC";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // steps array: each step has id + text
  const [steps, setSteps] = useState<{ id: string; text: string }[]>([]);
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  // add new step
  const addStep = () => {
    const newId = `Step ${steps.length + 1}`;
    setSteps([...steps, { id: newId, text: "" }]);
    setSelectedStep(newId);
  };

  // delete last step
  const deleteStep = () => {
    const newSteps = steps.slice(0, -1);
    setSteps(newSteps);
    setSelectedStep(newSteps.length > 0 ? newSteps[newSteps.length - 1].id : null);
  };

  // update text for selected step
  const updateStepText = (id: string, text: string) => {
    setSteps(steps.map(step => step.id === id ? { ...step, text } : step));
  };

  return (
    <>
    <div className="container-fluid p-0">
      <h2 className="text-center m-1">Generate your code</h2>

      <div className="row g-0">
        {/* Section A: Step Manager */}
        <div className="col-12 col-md-2 text-center p-4">
          <SectionA
            steps={steps}
            selectedStep={selectedStep}
            onAdd={addStep}
            onDelete={deleteStep}
            onSelect={setSelectedStep}
          />
        </div>

        {/* Section B: Text Editor */}
        <div className="col-12 col-md-5 text-center p-4">
          <SectionB
            selectedStep={selectedStep}
            steps={steps}
            onUpdateText={updateStepText}
          />
        </div>

        {/* Section C: Html doc Generator */}
        <div className="col-12 col-md-5 text-center p-4">
          <SectionC steps={steps} />
        </div>
      </div>
    </div>
  </>
  );
}