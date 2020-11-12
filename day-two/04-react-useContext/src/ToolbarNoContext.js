import ThemedButton from "./ThemedButtonNoContext";

function Toolbar(props) {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

export default Toolbar;
