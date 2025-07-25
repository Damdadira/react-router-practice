import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function Posts() {
  const { 
    isLoading,             // 로딩
    error,                 // 에러
    data: posts            // 받아온 데이터를 posts 변수에 저장
  } = useQuery({
    queryKey: ['posts'],   // 쿼리의 고유한 키, 배열 형태로 지정
    queryFn: () => axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data)   // 실행할 비동기 함수
  })

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Something Wrong😱</div>}
      {posts && (
          <ul>
            {posts.map(post => (
              <li key={post.id}><span style={{fontWeight: 'bold'}}>{post.title}:</span> {post.body}</li>
            ))}
          </ul>
      )}
    </>
  )
}