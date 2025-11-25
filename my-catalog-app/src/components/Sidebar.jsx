import React from "react";
import CategoryAccordion from "./CategoryAccordion";

export default function Sidebar({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="sidebar-wrap">
      <div className="sidebar-card">
        <div className="sidebar-home">Homepage</div>
        <div className="sidebar-acc">
          {categories.map(cat => (
            <CategoryAccordion
              key={cat}
              title={cat}
              onClick={() => onSelectCategory(cat)}
              active={activeCategory === cat}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
