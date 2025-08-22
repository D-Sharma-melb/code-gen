import React, { useState } from 'react'

type Props = {
  steps: { id: string; text: string }[];
}

function SectionC({steps}: Props) {
    const [genCode, setgenCode] = useState("");
    const onOutputClick = ()=>{
        console.log("Captured Steps:", steps);

        const html_doc = `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8" />
        <title>Steps Output</title>
        </head>
        <body style="font-family: Arial, sans-serif; margin: 20px; background-color: #f9f9f9;">

        <h2 style="text-align: center; margin-bottom: 20px; color: #333;">Steps</h2>

        <div id="buttonsContainer" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 20px;">
            ${steps
            .map(
                (step, index) =>
                `<button type="button" data-step-index="${index}" 
                    style="padding: 10px 20px; border: none; background-color: #007bff; color: white; border-radius: 5px; cursor: pointer; font-size: 14px;">
                    ${step.id}
                </button>`
            )
            .join("\n")}
        </div>

        <textarea
            id="outputBox"
            style="display: block; margin: 0 auto; width: 50%; height: 70vh; padding: 15px; font-size: 16px; border: 2px solid #007bff; border-radius: 10px; resize: none; box-shadow: 2px 2px 5px rgba(0,0,0,0.1);"
            placeholder="Step text will appear here"
            readonly
        ></textarea>

        <script>
            const steps = ${JSON.stringify(steps.map(s => s.text))};

            document.querySelectorAll('#buttonsContainer button').forEach((btn) => {
            btn.addEventListener('click', () => {
                const index = btn.getAttribute('data-step-index');
                // Set textarea value safely, so any HTML is rendered as plain text
                document.getElementById('outputBox').value = steps[index];
            });
            });
        </script>

        </body>
        </html>
        `;
        setgenCode(html_doc);
    }
    return (
        <div className="m-1">
            <div className="d-flex align-items-center justify-content-between mb-2">
                <h3 className="m-0">Output Code</h3>
                <button
                type="button"
                className="btn btn-primary"
                onClick={onOutputClick}
                >
                Output
                </button>
            </div>

        {/* Textarea below */}
        <textarea
            className="form-control"
            placeholder="Generated code appears here"
            id="outputTextarea"
            style={{ height: "70vh", resize: "none" }}
            value={genCode || ""}
            readOnly
        />
        </div>
    );
}

export default SectionC
