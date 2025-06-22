// pages/zelle.jsx
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Zelle() {
  const [qr, setQr] = useState(null)
  useEffect(() => {
    setQr(localStorage.getItem('qr_zelle'))
  }, [])

  return (
    <div className="modal-page">
      {qr
        ? <img src={qr} alt="Zelle QR" />
        : <p>No Zelle QR configured.</p>}
      <Link href="/"><button className="back-btn">Back</button></Link>
    </div>
  )
}
