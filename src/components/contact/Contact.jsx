import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { personalData } from '../../data/portfolioData'
import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'
import Button from '../common/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Contact] ${formData.subject}`,
          _replyto: formData.email,
          message: formData.message,
          _captcha: 'false' // Disables captcha verification screens
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error(error)
      alert('An error occurred. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 relative z-10 border-b border-[var(--color-accent-border)] bg-[#08060d]/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Feel free to reach out for internship opportunities, collaborations, or general questions." 
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12 items-start">
          {/* Info cards (2 columns) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Card className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-accent-bg border border-[var(--color-accent-border)] text-accent shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</h4>
                <a href={`mailto:${personalData.email}`} className="text-sm md:text-base font-semibold text-white hover:text-accent transition-colors duration-300">
                  {personalData.email}
                </a>
              </div>
            </Card>

            <Card className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-accent-bg border border-[var(--color-accent-border)] text-accent shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</h4>
                <a href={`tel:${personalData.phone}`} className="text-sm md:text-base font-semibold text-white hover:text-accent transition-colors duration-300">
                  +91 {personalData.phone}
                </a>
              </div>
            </Card>

            <Card className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-accent-bg border border-[var(--color-accent-border)] text-accent shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Location</h4>
                <p className="text-sm md:text-base font-semibold text-white">
                  {personalData.location}
                </p>
              </div>
            </Card>
          </div>

          {/* Form (3 columns) */}
          <Card className="md:col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#0d0b14]/50 border border-[var(--color-accent-border)] focus:border-accent text-[#f3f4f6] text-sm rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#0d0b14]/50 border border-[var(--color-accent-border)] focus:border-accent text-[#f3f4f6] text-sm rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-[#0d0b14]/50 border border-[var(--color-accent-border)] focus:border-accent text-[#f3f4f6] text-sm rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-[#0d0b14]/50 border border-[var(--color-accent-border)] focus:border-accent text-[#f3f4f6] text-sm rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300 resize-none"
                />
              </div>
              
              <Button type="submit" variant="primary" disabled={submitting} className="mt-2 w-full sm:w-fit self-end">
                {submitting ? 'Sending...' : submitted ? 'Message Sent!' : (
                  <>
                    Send Message <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
