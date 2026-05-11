import { useState, useEffect } from 'react';
import { Button } from '@q-labs/cobalt';

export default function FunctionButton({ children }) {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  function handleClick() {
    alert(`This button was created at ${date}`);
  }

  return (
    <Button variant="primary" size="md" onClick={handleClick}>
      {children}
    </Button>
  );
}
