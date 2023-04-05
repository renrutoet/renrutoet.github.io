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
        <div>Minor change 3</div>
        <div>Minor change 4</div>
      </main>
    </div>
  );
}

export default App;
