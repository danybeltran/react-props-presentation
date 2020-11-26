import React, { useEffect, useState } from "react";

// state-full
function FunctionComponent(props) {
  var [count, setCount] = useState(0);

  function add() {
    var newCount = count + 1;
    setCount(newCount);
  }
  function less() {
    var newCount = count - 1;
    setCount(newCount);
  }

  useEffect(() => {
    console.log("Something changed");
  }, [count]);

  return (
    <div className="p-2">
      <h1 className="text-2xl">{count}</h1>
      <button className="border border-black" onClick={add}>
        Add one
      </button>
      <button className="border border-black" onClick={less}>
        Less one
      </button>
    </div>
  );
}

export default FunctionComponent;
