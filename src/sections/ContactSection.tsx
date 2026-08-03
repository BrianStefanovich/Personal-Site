import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { SectionHeader } from '@/components/SectionHeader'
import { CONTACT_EMAIL } from '@/content/site.config'

export function ContactSection() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Consulta de ${name || 'sitio web'}`)
    const bodyLines = [
      `${t('contact.form.name')}: ${name}`,
      `${t('contact.form.email')}: ${email}`,
      `${t('contact.form.company')}: ${company}`,
      `${t('contact.form.role')}: ${role}`,
      '',
      message,
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="py-24" aria-labelledby="contact-heading">
      <div className="container">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <SectionHeader headingId="contact-heading" title={t('contact.title')} subtitle={t('contact.body')} />
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Mail className="size-4" />
              {t('contact.email')}
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="contact-name">{t('contact.form.name')}</Label>
                <Input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-email">{t('contact.form.email')}</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-company">{t('contact.form.company')}</Label>
                <Input id="contact-company" value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-role">{t('contact.form.role')}</Label>
                <Input id="contact-role" value={role} onChange={(e) => setRole(e.target.value)} />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-message">{t('contact.form.message')}</Label>
              <Textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              {t('contact.form.submit')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
