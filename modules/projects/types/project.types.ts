export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: ProjectCategory
}

export type ProjectCategory = "web" | "mobile" | "desktop" | "api"
