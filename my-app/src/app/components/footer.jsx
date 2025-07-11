'use client'

import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} My App. All rights reserved.
                </p>
                <p className="text-sm">
                    <a href="/privacy-policy" className="text-blue-400 hover:underline">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </footer>
        <style jsx>{`
            footer {
                position: fixed;
                bottom: 0;
                width: 100%;
                left: 0;
            }
        `}</style>
    </>
  )
}
