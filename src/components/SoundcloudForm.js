import { FirestoreContext } from '../context/FirestoreContext';
import styles from '../styles/pages/Admin.module.scss';

export default function SoundcloudForm() {
  return (
    <FirestoreContext.Consumer>
      {({ errorMessage, setErrorMessage, successMessage, addDocument }) => {
        const onSubmit = (e) => {
          e.preventDefault();
          const script = e.target.playlist.value;
          if (!script || !script.includes('<iframe')) {
            setErrorMessage('*Please enter a soundcloud playlist embed script.');
            return;
          }
          addDocument(script);
        }
        
        return (
          <>
            <form onSubmit={onSubmit} className={`${styles.form} mt-10 flex-col mx-6 p-4`}>
              <h1 className="text-2xl">Soundcloud Playlist Dropoff</h1>
              <textarea className="block w-full mt-4 p-4 outline-none" name="playlist" />
              <button type="submit" className="mt-4">Submit</button>
            </form>

            {successMessage
              ? <div className="transition duration-300 w-full p-2 text-center text-green-500">{successMessage}</div> 
              : null
            }

            {errorMessage
              ? <div className="transition duration-300 w-full p-2 text-center text-red-500">{errorMessage}</div> 
              : null
            }

            <a href="/" className="relative mt-6 block">
              <i className="fa fa-arrow-left pr-4" />
              Back to the main site
            </a>
          </>
        )
      }}
    </FirestoreContext.Consumer>
  );
};
