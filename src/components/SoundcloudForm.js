function onSubmit(e) {
  e.preventDefault()
  console.log('soundcloud e', e)
}

export default function SoundcloudForm() {
  return (
    <form onSubmit={onSubmit} className="mt-10 flex-col">
      <h1>Soundcloud Playlist Dropoff</h1>
      <textarea className="block w-full" />
      <button type="submit">Submit</button>
    </form>
  )
}