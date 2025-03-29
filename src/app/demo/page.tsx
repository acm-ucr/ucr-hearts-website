"use client"; //always include when using useState or useEffect; not all hooks require this
import { useState, useEffect } from "react"; //import the hooks from react

const Demo = () => {
  const [count, setCount] = useState(0); //declare the "variable" and the "setter function" for useState

  useEffect(() => {
    //perform some action on render
    console.log("Component mounted!");
  }, []); //the empty array ([]) tells react to not run it more than once

  return (
    <div className="flex items-center justify-center">
      <button
        className="m-[2vw] aspect-square w-[12vw] rounded-md border border-black bg-white text-[2vw]"
        onClick={() => setCount(count + 1)} //onClick, call the setter and increment the count, which is displayed via the call below
      >
        {count}
      </button>
    </div>
  );
};

/*to see what useEffect does, inspect the page and go to the console.  the message above will be 
logged every time the page is rendered (reloaded, for instance).

notice that on re-render, the useState comp goes to its default state.
in this case, count is initialized to 0 on line 5.

remember that react hooks don't handle a specific action, but a specific logic (i.e. useState for dynamic data). */

export default Demo;
