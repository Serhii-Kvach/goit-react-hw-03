import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  return (
    <div className={css.container}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="searchBox"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
