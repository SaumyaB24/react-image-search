import { useState } from "react";
import "./SearchBar.css";
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const hadleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={hadleFormSubmit}>
        <label>Enter Search Term:</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
