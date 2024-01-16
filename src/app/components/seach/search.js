import './style.css';

function Search({ value, onChange }) {
  return (
    <div className="container_search border-slate-100">
      <input type="text" placeholder="Search..." value={value} onChange={onChange} />
    </div>
  );
}

export default Search;