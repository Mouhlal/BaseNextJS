/* import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                 <li>
                    <Link href={{
                        pathname: "/Country/japan",
                        query: { id: "123" } // Example query parameter
                    }}>Country 1</Link>
                </li>
                 <li>
                    <Link href={{
                        pathname: "/Country/maroc",
                        query: { id: "2" } // Example query parameter
                    }}>Country 2</Link>
                </li>
                <li>
                    <Link href="/dashboard/settings">Settings</Link>
                </li>
                <li>
                    <Link href="/not-found">Not Found</Link>
                </li>
                <br />
                <br />
                <br />
            </ul>
        </nav>
    </>
  )
}
 */

import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="flex gap-4 mb-4">
      <Link href="/products">Tous</Link>
      <Link href="/products?category=fruits">Fruits</Link>
      <Link href="/products?category=légumes">Légumes</Link>
    </div>
  );
}
