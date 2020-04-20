import React, { useState } from "react";
import "./volunteer-search.css";

function SearchForm({ onSearch }) {
  const [text, setText] = useState("");

  const onChange = (event) => {
    event.preventDefault();
    let text = event.target.value;
    if (text) {
      text = text.trim();
    }
    setText(text);
    onSearch(text);
  };

  const clear = () => {
    setText("");
    onSearch("");
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">
            <input
              className="form-control"
              type="text"
              onChange={onChange}
              value={text}
              name="name"
              id="name"
              placeholder="ابحث بواسطة : بالاسم ، التخصص"
            />

            {text.length > 0 && (
              <div className="clear" onClick={() => clear()}>
                <i class="fa fa-close"></i>
              </div>
            )}
          </label>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
