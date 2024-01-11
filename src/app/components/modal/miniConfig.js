
function MiniConfig({content, toggleMenu, className}) {
  return (
    <div ref={toggleMenu} className={"fixed top-16 mini_config " + className}>
      {content}
    </div>
  );
}

export default MiniConfig;