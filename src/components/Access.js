import { useEffect, useState } from 'react';
import styles from '../styles/components/Access.module.scss';

export default function Access({ correctPasscode, setAccess, wrapperRef, landingRef }) {
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (input.length === 4) {
      if (input === correctPasscode) {
        setAccess(true);
        wrapperRef.current.style.transform = `rotateY(-180deg)`;
        if (landingRef.current) {
          landingRef.current.style.display = 'none';
        }
        sessionStorage.setItem('skyp_access', Date.now());
      } else {
        setErrorMessage('Incorrect Passcode');
      }
    }
  }, [input, correctPasscode, setAccess, wrapperRef, landingRef]);

  return (
    <div className={`${styles.enter_passcode} relative`}>
      <div className={`absolute max-w-xs left-2/4 transform -translate-x-2/4`}>
        <img src={'/assets/logo.gif'} alt="sky parlor spinning logo" />
      </div>
      <div className={`${styles.enter_passcode_container} flex flex-col items-center justify-center`}>
        <h1 className="text-2xl my-4">Enter Passcode</h1>
        <form>
          <input 
            type="password"
            placeholder="XXXX"
            maxLength="4"
            required
            onChange={(e) => setInput(e.target.value)}
            className="p-4"
          />
        </form>
        <p className="text-sm mt-4 text-red-500">{!!errorMessage ? errorMessage : null}</p>
      </div>
    </div>
  );
};
