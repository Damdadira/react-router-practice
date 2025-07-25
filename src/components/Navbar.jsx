import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to='/'>Home</Link>
        <Link to='/videos'>Videos</Link>
        <Link to='/posts'>Posts</Link>
      </div>
    </nav>
  )
}