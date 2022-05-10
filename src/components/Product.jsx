import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { actionTypes } from '../redux/cart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    width: 250,
    margin: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {},
  media: {
    height: 0,
    paddingTop: '100%'
  }
});

function Product(props) {
  const classes = useStyles();
  const { name, price, quantity, addToCart, cartIds, id, img_url } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={img_url}

      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {price}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
         Quantidade de itens: {quantity}
        </Typography>
      </CardContent>
      <CardActions>
        {cartIds.includes(id) ? (
          <Button size="small" component={Link} to="/cart">
            Modificar
          </Button>
        ) : (
          <Button size="small" onClick={() => addToCart(props)}>
            Adicionar no carrinho
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

const mapStateTopProps = ({ cart }) => ({
  cartIds: cart.cartIds
});

const mapDispatchToProps = dispatch => ({
  addToCart: payload => dispatch({ type: actionTypes.ADD_TO_CART, payload })
});

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(Product);
