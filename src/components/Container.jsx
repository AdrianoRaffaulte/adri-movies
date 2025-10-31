function Container({ children }) {
  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        padding: "0",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
