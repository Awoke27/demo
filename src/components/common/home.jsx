
import "./common.css";
import { useState } from 'react';


export default function Home() {
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    priceMin: '',
    priceMax: '',
    floor: '',
    homeType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };
  return (
    <>
     <form className="search-filter" onSubmit={handleSubmit}>
      <input
        type="text"
        name="keyword"
        placeholder="Search by keyword"
        value={filters.keyword}
        onChange={handleChange}
      />

      <select name="location" value={filters.location} onChange={handleChange}>
        <option value="">All Locations</option>
        <option value="kebele 14">kebele 14</option>
        <option value="kebele 4">kebele 4</option>
        <option value="kebele 1">kebele 1</option>
        {/* Add more locations as needed */}
      </select>

      <div className="price-range">
        <input
          type="number"
          name="priceMin"
          placeholder="Min Price"
          value={filters.priceMin}
          onChange={handleChange}
        />
        <input
          type="number"
          name="priceMax"
          placeholder="Max Price"
          value={filters.priceMax}
          onChange={handleChange}
        />
      </div>

      <select name="floor" value={filters.floor} onChange={handleChange}>
        <option value="">Any Floor</option>
        <option value="ground">Ground</option>
        <option value="1">1st Floor</option>
        <option value="2">2nd Floor</option>
        <option value="3">3rd Floor</option>
        {/* Add more floors as needed */}
      </select>

      <select name="homeType" value={filters.homeType} onChange={handleChange}>
        <option value="">All Types</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="condo">Condo</option>
        {/* Add more types as needed */}
      </select>

      <button type="submit">Search</button>
    </form>

    </>
  );
}