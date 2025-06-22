// pages/index.jsx
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [showConfig, setShowConfig] = useState(false)

  return (
    <div className="home-container">
      <div className="button-grid full-screen">
        <Link href="/zelle"><button>Zelle</button></Link>
        <Link href="/paypal"><button>PayPal</button></Link>
        <Link href="/crypto"><button>Crypto</button></Link>
        <Link href="/configure"><button>Add another option</button></Link>
      </div>

      {/* clickable hotspot */}
      <div
        className="configure-trigger"
        onClick={() => setShowConfig(v => !v)}
      />

      {/* conditionally rendered */}
      {showConfig && (
        <Link href="/configure">
          <button className="configure-button">Configure</button>
        </Link>
      )}
    </div>
  )
}
