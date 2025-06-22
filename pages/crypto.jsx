// pages/crypto.jsx
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Crypto() {
  const [iid, setIid] = useState(null)

  useEffect(() => {
    let stored = localStorage.getItem('now_iid')
    if (!stored) {
      const param = new URLSearchParams(window.location.search).get('iid')
      if (param) {
        localStorage.setItem('now_iid', param)
        stored = param
      }
    }
    setIid(stored)
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        padding: '1rem'
      }}
    >
      {iid ? (
        <iframe
          src={`https://nowpayments.io/embeds/payment-widget?iid=${iid}`}
          width="410"
          height="696"
          frameBorder="0"
          scrolling="no"
          sandbox="allow-scripts allow-same-origin"
          style={{
            overflowY: 'hidden',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
        />
      ) : (
        <p>No IID configured.</p>
      )}

      <Link href="/" passHref>
        <button
          style={{
            marginTop: '1.5rem',
            padding: '1rem 2rem',
            fontSize: '1.25rem',
            border: 'none',
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Back
        </button>
      </Link>
    </div>
  )
}
