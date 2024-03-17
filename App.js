import React from "react";
import ReactDOM from "react-dom/client"


const HeadingComponent = () => (
   <div>
    <h1>Namaste React Functional Component</h1>
  </div>
)



 const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

