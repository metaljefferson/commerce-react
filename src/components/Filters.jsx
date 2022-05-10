import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { actionTypes } from '../redux/catalog';

const styles = {
  range: {
    width: '50%'
  }
};

function Sort(props) {
  const { } = props;
  return (
    <React.Fragment>
     
    </React.Fragment>
  );
}

const mapStateToProps = ({ catalog }) => ({
  rangeMin: catalog.rangeMin,
  rangeMax: catalog.rangeMax,
  availability: catalog.availability,
  stock: catalog.stock
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
