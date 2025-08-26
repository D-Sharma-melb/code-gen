import BootstrapClient from "@/components/bootstrapClient";
import React from "react";

function Page() {
  return (
    <div className="container my-3">
      <BootstrapClient />
      <h1 className="m-3">Hey! My name is Divyam Sharma</h1>
      <p className="m-3">Student Number: 21515263</p>

      <div className="m-3">
        <h2>My Video</h2>
        {/* Responsive YouTube embed */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/iD37m4hlG1U"
            title="Explanantion video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Page;
