const Hello = ({firstname, children}) => {
  
  return (
    <>
      <h2>Hello {firstname} !</h2>
      {children}
    </>
  );
}

export default Hello;
