
function MiniConfig({content, toggleMenu}) {
  return (
    <div ref={toggleMenu} className="fixed top-16 left-1 mini_config">
      {content}
    </div>
  );
}

export default MiniConfig;