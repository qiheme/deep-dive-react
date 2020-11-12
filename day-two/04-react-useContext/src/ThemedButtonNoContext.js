function ThemedButton(props) {
  return (
    <button
      style={{
        background: props.theme.background,
        color: props.theme.foreground,
      }}
    >
      I am styled by theme context!
    </button>
  );
}

export default ThemedButton;
