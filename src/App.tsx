import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Homepage</h1>
      <main className="card">
        <div>About me</div>
        <div>Testing CICD</div>
      </main>
    </div>
  );
}

export default App;
