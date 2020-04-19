import React, { useEffect } from "react";

//doc import

function Complete() {
  useEffect(() => {
    document.title = "In Progress";
  }, []);

  return (
    <div className="interests">
      <div>This is redone</div>
    </div>
  );
}

export default Complete;
