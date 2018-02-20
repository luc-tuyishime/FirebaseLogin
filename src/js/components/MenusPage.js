import React from 'react';
import { MenusList } from './MenusList'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

 class MenusPage extends React.Component {
  render() {
    return (
      <div>
      	<h1>Menu List</h1>

      	<MenusList menus={this.props.menus} />
      </div>
    );
  }
}

MenusPage.propTypes = {

	menus : PropTypes.array.isRequired
}

function mapStateToProps(state){
	return {
		menus: state.menus
	}
}

export default connect(mapStateToProps)(MenusPage);