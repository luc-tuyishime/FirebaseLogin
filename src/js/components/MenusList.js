import React from 'react';
import PropTypes from 'prop-types';

export const MenusList = ({ menus }) => {
	const emptyMessage = (
      <p>No menus created yet</p>
	);

	const menusList = (
      <p>menu list</p>
	);

	return (
      <div>
      {menus.length === 0 ? emptyMessage : menusList}
      </div>
	);
}

MenusList.propTypes = {
	menus: PropTypes.array.isRequired
}





