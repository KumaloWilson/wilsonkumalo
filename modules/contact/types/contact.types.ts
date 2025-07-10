export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  socialLinks: SocialLink[]
}

export interface SocialLink {
  platform: string
  url: string
}

export interface ContactMethod {
  icon: any
  label: string
  value: string
  href: string
}
