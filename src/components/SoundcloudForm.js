import { FirestoreContext } from '../context/FirestoreContext';
import styles from '../styles/pages/Admin.module.scss';

export default function SoundcloudForm() {
  return (
    <FirestoreContext.Consumer>
      {({ successMessage, addDocument }) => {
        const onSubmit = (e) => {
          e.preventDefault();
          const script = e.target.playlist.value;
          addDocument(script);
        }
        
        return (
          <>
            {successMessage
              ? <div className="transition duration-300 w-full absolute top-0 p-2 text-center bg-green-200">{successMessage}</div> 
              : null
            }
            <form onSubmit={onSubmit} className={`${styles.form} mt-10 flex-col mx-6`}>
              <h1 className="text-2xl">Soundcloud Playlist Dropoff</h1>
              <textarea className="block w-full mt-4 p-4 outline-none" name="playlist" />
              <button type="submit" className="mt-4">Submit</button>
            </form>
            <a href="/" className="relative mt-6 block">
              <i class="fa fa-arrow-left pr-4" />
              Back to the main site
            </a>
          </>
        )
      }}
    </FirestoreContext.Consumer>
  );
};
