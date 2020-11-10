import {useState, useEffect} from "react";

export default function FunctionButton(props) {
  const [date, setDate] = useState();

  function handleClick() {
    alert(`This button was created at ${date}`);
  }

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <div>
      <button onClick={handleClick} style={{backgroundColor: props.color}}>
        {props.children}
      </button>
    </div>
  );
}
