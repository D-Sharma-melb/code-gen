"use client";
import SectionA from "@/components/SectionA";
import SectionB from "@/components/SectionB";
import SectionC from "@/components/SectionC";
import { useState, useEffect } from "react";

type Step = { id: string; text: string };

export default function Home() {
  const [steps, setSteps] = useState<Step[]>([]);
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("steps");
    if (saved) {
      try {
        const parsed: Step[] = JSON.parse(saved);
        setSteps(parsed);
        if (parsed.length > 0) {
          setSelectedStep(parsed[parsed.length - 1].id);
        }
      } catch (err) {
        console.error("Failed to parse steps from localStorage:", err);
      }
    }
  }, []);

  // Save to localStorage whenever steps change
  useEffect(() => {
    localStorage.setItem("steps", JSON.stringify(steps));
  }, [steps]);

  // Add new step
  const addStep = () => {
    const newId = `Step ${steps.length + 1}`;
    setSteps([...steps, { id: newId, text: "" }]);
    setSelectedStep(newId);
  };

  // Delete last step
  const deleteStep = () => {
    const newSteps = steps.slice(0, -1);
    setSteps(newSteps);
    setSelectedStep(
      newSteps.length > 0 ? newSteps[newSteps.length - 1].id : null
    );
  };

  // Update text for selected step
  const updateStepText = (id: string, text: string) => {
    setSteps(steps.map((step) => (step.id === id ? { ...step, text } : step)));
  };

  // for renaming the step heading
  const updateStepId = (oldId: string, newId: string) => {
    setSteps(
      steps.map((step) => (step.id === oldId ? { ...step, id: newId } : step))
    );
    if (selectedStep === oldId) setSelectedStep(newId);
  };

  return (
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
            onRename={updateStepId} 
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
  );
}
