function MonthSelect({ onMonthChange }) {
  return (
    <div className="change_month_container z-50">
      <section className="change_month_section">
        <select onChange={onMonthChange} className="hange_month">
          <option value="0">Janeiro</option>
          <option value="1">Fevereiro</option>
          <option value="2">Março</option>
          {/* ... */}
          <option value="11">Dezembro</option>
        </select>
      </section>
    </div>
  );
}

export default MonthSelect;
