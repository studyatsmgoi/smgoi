import Link from 'next/link';
import React from 'react'

function NotFound() {
  return (
    <main>
    <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
            <h3 className="text-white font-semibold">
                404 Error
            </h3>
            <p className="text-white text-4xl font-semibold sm:text-5xl">
                Page not found
            </p>
            <p className="text-white">
                Sorry, the page you are looking for could not be found or has been removed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href="/" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg">
                    Go back to Home
                </Link>
                <Link href="/contact" className="block py-2 px-4 text-white hover:bg-yellow-500 font-medium duration-150 active:bg-yellow-500 border rounded-lg">
                    Contact support
                </Link>
            </div>
        </div>
    </div>
</main>
  )
}

export default NotFound;