import { Heading, Body } from '@q-labs/cobalt';
import FunctionButton from './FunctionButton';

function App() {
  return (
    <main style={{ padding: '2rem', maxWidth: '640px', margin: '0 auto' }}>
      <Heading level={1}>React Basics</Heading>
      <Body>
        A function component that uses <code>useState</code> and{' '}
        <code>useEffect</code>. Click the button to see the timestamp captured
        when the component first mounted.
      </Body>
      <div style={{ marginTop: '1.5rem' }}>
        <FunctionButton>Click me</FunctionButton>
      </div>
    </main>
  );
}

export default App;
