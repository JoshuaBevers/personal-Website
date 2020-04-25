import React, { useEffect } from "react";

//doc import

function Complete() {
  useEffect(() => {
    document.title = "Complete";
  });

  //I really need to figure out how I want this displayed. I know I want this on the website, I just don't know
  //How it would be best to display it graphically.
  return (
    <div className="interests">
      <div>
        WIP
        <ul>
          placeholder list of links to be improved.
          <li>https://github.com/JoshuaBevers/PyCatWhy</li>
          <li>https://github.com/JoshuaBevers/pandemic-georgia</li>
        </ul>
      </div>
    </div>
  );
}

export default Complete;
