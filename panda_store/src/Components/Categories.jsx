import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {};
  }

  oneWordCategories = (name) => {
    const singleName = name.split(' ')[0];
    const noComma = singleName.split(',')[0];
    return noComma;
  }

  render() {
    const { categories, handleClickCategory } = this.props;
    return (
      <div className="categoriesBar">
        <div className="categories">
          {categories.map(({ name, id }) => (
            <button
              key={id}
              type="button"
              value={id}
              onClick={handleClickCategory}
            >
              {this.oneWordCategories(name)}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClickCategory: PropTypes.func.isRequired,
};
