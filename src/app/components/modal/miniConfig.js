
function MiniConfig({content, toggleMenu, className}) {
  return (
    <div ref={toggleMenu} className={"fixed mini_config " + className}>
      {content}
    </div>
  );
}

export default MiniConfig;