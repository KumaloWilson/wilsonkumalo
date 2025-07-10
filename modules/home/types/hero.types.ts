export interface HeroProps {
  name: string
  title: string
  description: string
  socialLinks: SocialLink[]
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}
