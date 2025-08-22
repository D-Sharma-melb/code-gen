"use client";
import SectionA from "@/components/SectionA";
import SectionB from "@/components/SectionB";
import SectionC from "@/components/SectionC";
import { useState } from "react";

export default function Home() {{

  };

  return (
    <>
    <div className="container-fluid p-0">
      <h2 className="text-center m-1">Generate your code</h2>

      <div className="row g-0">
        {/* Section A: Step Manager */}
        <div className="col-12 col-md-2 text-center p-4">
          <SectionA />
        </div>

        {/* Section B: Text Editor */}
        <div className="col-12 col-md-5 text-center p-4">
          <SectionB />
        </div>

        {/* Section C: Html doc Generator */}
        <div className="col-12 col-md-5 text-center p-4">
          <SectionC />
        </div>
      </div>
    </div>
  </>
  );
}