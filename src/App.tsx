import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Homepage</h1>
      <main className="card">
        <div>About me</div>
        <div>Minor change</div>
        <div>Minor change 2</div>
      </main>
    </div>
  );
}

export default App;
