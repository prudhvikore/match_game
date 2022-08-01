import './index.css'

const ThumbnailItem = props => {
  const {
    thumbnailDetails,
    onSelect,
    increaseScore,
    randomObject,
    timerStop,
  } = props
  const {id, thumbnailUrl} = thumbnailDetails
  const onSelectThumbnail = () => {
    onSelect(id, increaseScore, randomObject, timerStop)
  }

  return (
    <li className="thumbnail-item">
      <img
        className="thumbnail-image"
        src={thumbnailUrl}
        alt="thumbnail"
        onClick={onSelectThumbnail}
      />
    </li>
  )
}

export default ThumbnailItem
