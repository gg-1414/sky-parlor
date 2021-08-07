import '../styles/components/Cube.scss';
import CartIcon from './Cart/CartIcon';

export default function Cube() {
  return (
    <div id="wrapper">
      <div class="viewport">
        <div class="cube">
          <div class="side">
            <div class="cube-image">
              <CartIcon />
            </div>
          </div>
          <div class="side">
            <div class="cube-image">
              <CartIcon />
            </div>
          </div>
          <div class="side">
            <div class="cube-image">
              <CartIcon />
            </div>
          </div>
          <div class="side">
            <div class="cube-image">
              <CartIcon />
            </div>
          </div>
          <div class="side">
            <div class="cube-image">
              <CartIcon />
            </div>
          </div>
          <div class="side">
            <div class="cube-image active">
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Credit: https://codepen.io/jordizle/pen/haIdo/