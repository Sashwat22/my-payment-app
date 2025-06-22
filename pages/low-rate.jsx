// pages/low-rate.jsx
import Link from 'next/link'

export default function LowRate() {
  const options = [
    { name: 'ACH Bank Transfer', description: 'Free or $0.25 per tx' },
    { name: 'Venmo Business',     description: '1.9% + $0.10' },
    { name: 'Cash App',           description: '2.75% per tx' },
    { name: 'Google/Apple Pay',   description: '1% per tx' },
  ]

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Other Low-Rate Payment Options</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {options.map(o => (
          <li key={o.name} style={{ marginBottom: '1rem' }}>
            <strong>{o.name}</strong>: {o.description}
          </li>
        ))}
      </ul>

      <Link href="/">
        <button
          style={{
            marginTop: '2rem',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '0.5rem',
            background: '#0070f3',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          ← Back to Home
        </button>
      </Link>
    </div>
  )
}
