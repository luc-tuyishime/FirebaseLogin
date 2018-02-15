import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => {
  return { menus: state.menus };
};
const ConnectedList = ({ menus }) => (
  <ul className="list-group list-group-flush">
    {menus.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;