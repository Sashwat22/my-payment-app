// pages/paypal.jsx
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function PayPal() {
  const [qr, setQr] = useState(null)
  useEffect(() => {
    setQr(localStorage.getItem('qr_paypal'))
  }, [])

  return (
    <div className="modal-page">
      {qr
        ? <img src={qr} alt="PayPal QR" />
        : <p>No PayPal QR configured.</p>}
      <Link href="/"><button className="back-btn">Back</button></Link>
    </div>
  )
}
