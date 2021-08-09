import '../styles/components/Cube.scss';
import CartIcon from './Cart/CartIcon';

export default function Cube() {
  return (
    <div id="wrapper">
      <div className="viewport">
        <div className="cube">
          <div className="side">
            <div className="cube-image">
              <CartIcon />
            </div>
          </div>
          <div className="side">
            <div className="cube-image">
              <CartIcon />
            </div>
          </div>
          <div className="side">
            <div className="cube-image">
              <CartIcon />
            </div>
          </div>
          <div className="side">
            <div className="cube-image">
              <CartIcon />
            </div>
          </div>
          <div className="side">
            <div className="cube-image">
              <CartIcon />
            </div>
          </div>
          <div className="side">
            <div className="cube-image active">
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Credit: https://codepen.io/jordizle/pen/haIdo/