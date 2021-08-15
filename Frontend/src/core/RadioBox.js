import React, {useState, useEffect,} from 'react';

const RadioBox = ({prices , handleFilters}) => {
    const[value, setValue] = useState(0);

    const handleChange = (event) => {
        handleFilters(event.target.value)
        setValue(event.target.value);
    }

    return prices.map((p, i) => (
        <div key={i}>
          <input
            onChange={handleChange}
            value={`${p._id}`}
            name = {p}
            type="radio"
            className="me-2 ms-4"
          />
          <label className="form-check-label ms-1">{p.name}</label>
        </div>
      ));
}


export default RadioBox;