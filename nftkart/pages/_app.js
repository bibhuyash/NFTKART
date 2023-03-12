import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className='border-b p-6'>
        <p className='text-4xl font-bold'>NFTKART</p>
        <div className='flex mt-4'>
          <Link href="/" legacyBehavior>
            <a className="mr-6 text-pink-500">Home</a>
          </Link>
          <Link href="/create-item" legacyBehavior>
            <a className='mr-6 text-pink-500'>Sell Digital Asset</a>
          </Link>
          <Link href="/my-asset" legacyBehavior>
            <a className='mr-6 text-pink-500'>My Digital Asset</a>
          </Link>
          <Link href="/creator-dashboard" legacyBehavior>
            <a className='mr-6 text-pink-500'>Creator Dashboard</a>
          </Link>
        </div>

      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
