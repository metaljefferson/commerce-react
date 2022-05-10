import React from 'react';
// redux
import { compose } from 'redux';
import { connect } from 'react-redux';
// @material-ui
import { withStyles } from '@material-ui/core/styles';
// actionTypes
import { actionTypes } from '../redux/catalog';

const styles = {
  formControl: {
    width: '50%'
  }
};

function Sort(props) {
  const { classes, addFilter, sortBy, sortOrder } = props;

  return (
    <div>
    
      
    </div>
  );
}

const mapStateToProps = ({ catalog }) => ({
  sortBy: catalog.sortBy,
  sortOrder: catalog.sortOrder
});

const mapDispatchToProps = dispatch => ({
  addFilter: payload => dispatch({ type: actionTypes.ADD_FILTER, payload })
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Sort);
