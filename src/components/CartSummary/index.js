import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const lenOfCart = cartList.length
      let totalPrice = 0
      cartList.forEach(each => {
        totalPrice += each.price * each.quantity
      })
      return (
        <div className="order-summary-container">
          <div className="summary-heading-card">
            <h1 className="order-heading">Order Total: </h1>
            <h1 className="price-style">RS {totalPrice}/- </h1>
          </div>
          <p className="item-style">{lenOfCart} items in cart</p>
          <button type="button" className="check-out-style">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
