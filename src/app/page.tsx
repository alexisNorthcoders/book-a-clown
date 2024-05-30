import Link from 'next/link'
 
function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About me</Link>
      </li>
      <li>
        <Link href="/booking">Book me</Link>
      </li>
      <li>
        <Link href="/gallery">Gallery</Link>
      </li>
      <li>
        <Link href="/contact">Contact Me</Link>
      </li>
    </ul>
  )
}
 
export default Home