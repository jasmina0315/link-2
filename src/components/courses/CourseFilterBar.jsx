export default function CourseFilterBar({ category, setCategory, search, setSearch, categories }) {
  return (
    <div className="filter-bar card">
      <div className="search-wrap">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by course name"
          aria-label="Search courses"
        />
      </div>

      <div className="filter-pills">
        <button
          className={`filter-pill ${category === 'All' ? 'active' : ''}`}
          onClick={() => setCategory('All')}
        >
          All
        </button>
        {categories.map((item) => (
          <button
            key={item}
            className={`filter-pill ${category === item ? 'active' : ''}`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
