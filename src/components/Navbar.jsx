import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link to='/'>Home</Link>
      <Link to='/videos'>Videos</Link>
    </nav>
  )
}