'use client'

import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'

const subjects = [
  { label: 'General enquiry', value: 'general' },
  { label: 'Counselling', value: 'counselling' },
  { label: 'Developmental support', value: 'developmental' },
  { label: 'Speech & language therapy', value: 'speech-therapy' },
  { label: 'Learning support', value: 'learning-support' },
  { label: 'Family guidance', value: 'family-guidance' },
  { label: 'Foundation / NBF', value: 'foundation' },
]

export function EnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        const json = await res.json()
        setErrorMsg(json.error || 'Something went wrong.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Unable to send. Please try calling us directly.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="enquiry-success">
        <CheckCircle2 />
        <h3>Thank you for your enquiry</h3>
        <p>We have received your message and will respond within 24 hours.</p>
        <button className="button button-secondary" onClick={() => setStatus('idle')} type="button">
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="eq-name">Full name *</label>
          <input id="eq-name" name="name" required type="text" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="eq-email">Email address *</label>
          <input id="eq-email" name="email" required type="email" placeholder="you@example.com" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="eq-phone">Phone number</label>
          <input id="eq-phone" name="phone" type="tel" placeholder="Optional" />
        </div>
        <div className="form-group">
          <label htmlFor="eq-subject">Subject *</label>
          <select id="eq-subject" name="subject" required>
            {subjects.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="eq-message">Message *</label>
        <textarea id="eq-message" name="message" required rows={4} placeholder="How can we help you?" />
      </div>
      {status === 'error' && <p className="form-error">{errorMsg}</p>}
      <button className="button button-primary" disabled={status === 'sending'} type="submit">
        {status === 'sending' ? <><Loader2 className="spin" /> Sending...</> : <><Send /> Send enquiry</>}
      </button>
    </form>
  )
}
