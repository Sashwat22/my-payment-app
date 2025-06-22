// pages/configure.jsx
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Configure() {
  const router = useRouter()
  const [zelle, setZelle] = useState('')
  const [paypal, setPaypal] = useState('')
  const [iid, setIid] = useState('')

  useEffect(() => {
    setZelle(localStorage.getItem('qr_zelle') || '')
    setPaypal(localStorage.getItem('qr_paypal') || '')
    setIid(localStorage.getItem('now_iid') || '')
  }, [])

  const handleFile = (e, setter) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setter(reader.result)
    reader.readAsDataURL(file)
  }

  const save = () => {
    if (!zelle || !paypal || !iid.trim()) {
      return alert('All fields are required.')
    }
    localStorage.setItem('qr_zelle', zelle)
    localStorage.setItem('qr_paypal', paypal)
    localStorage.setItem('now_iid', iid.trim())
    router.push('/')
  }

  return (
    <form onSubmit={e => { e.preventDefault(); save() }}>
      <label>Zelle QR</label>
      <input type="file" accept="image/*" onChange={e => handleFile(e, setZelle)} />
      <label>PayPal QR</label>
      <input type="file" accept="image/*" onChange={e => handleFile(e, setPaypal)} />
      <label>NowPayments IID</label>
      <input
        type="text"
        value={iid}
        onChange={e => setIid(e.target.value)}
      />
      <button type="submit">Save & Return to Payment</button>
    </form>
  )
}
