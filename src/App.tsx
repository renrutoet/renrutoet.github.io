import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-black	">
      <div className="flex h-full justify-center items-center	text-center	">
        <div className="text-white	">
          <h1 className="text-3xl">Welcome to the my Hompage!</h1>
          <h4 className="text-xl">
            This site is currently under construction, come back soon!
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
