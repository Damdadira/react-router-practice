import { useParams } from 'react-router'

export default function VideoDetail() {
  const { videoId } = useParams();

  return (
    <div>VideoDetail {videoId}</div>
  )
}