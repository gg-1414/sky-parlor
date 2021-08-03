function onSubmit(e) {
  e.preventDefault()
  console.log('soundcloud e', e)
}

export default function SoundcloudForm() {
  return (
    <form onSubmit={onSubmit}>
      <h1>Soundcloud Playlist Dropoff</h1>
      <textarea />
      <button type="submit">Submit</button>
    </form>
  )
}