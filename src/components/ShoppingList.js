import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [category, setCategory] = useState('All')

  const handleCategory = (event) => {
    // const filteredItems = items.filter(item => {
    //   event.target.value === item.category
    // })
    setCategory(event.target.value)
  }

  const mappedItems = items => {
    return items.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    ))
  }

  const handleFilter = category => {
    if (category === 'All') {
      return items
    }
    else {
      return items.filter (item => {
        return category === item.category
      })

    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All" >Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {mappedItems(handleFilter(category))} 
        
      </ul>
    </div>
  );
}

export default ShoppingList;
