import React, { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom";

import App from "./_app";

function Home() {
  useEffect(() => {
    const root = createRoot(document.getElementById("root"));
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }, []);

  return <div id="root"></div>;
}

export default Home;
