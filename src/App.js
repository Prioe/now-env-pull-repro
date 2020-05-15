import React from 'react';

function demo () {
  try {
    console.log('Trying to parse `process.env.REACT_APP_DEMO`')
    JSON.parse(process.env.REACT_APP_DEMO)
  } catch (e) {
    console.log('Failed to parse `process.env.REACT_APP_DEMO`')
    console.error(e)
  }
}

demo()

function App() {
  return (
    <div>
      <h1>now-env-pull-repro</h1>
      <pre>{process.env.REACT_APP_DEMO}</pre>
    </div>
  );
}

export default App;
