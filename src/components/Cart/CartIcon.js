import styles from '../../styles/components/Cart.module.scss';

export default function CartIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.cart_icon} pointer-events-none`}>
      <path d="M31.1 26C32.6 26 33.92 25.18 34.6 23.94L41.76 10.96C42.5 9.64 41.54 8 40.02 8H10.42L8.54 4H2V8H6L13.2 23.18L10.5 28.06C9.04 30.74 10.96 34 14 34H38V30H14L16.2 26H31.1ZM12.32 12H36.62L31.1 22H17.06L12.32 12ZM14 36C11.8 36 10.02 37.8 10.02 40C10.02 42.2 11.8 44 14 44C16.2 44 18 42.2 18 40C18 37.8 16.2 36 14 36ZM34 36C31.8 36 30.02 37.8 30.02 40C30.02 42.2 31.8 44 34 44C36.2 44 38 42.2 38 40C38 37.8 36.2 36 34 36Z" fill="white"/>
    </svg>
  )
}