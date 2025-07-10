export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: ProjectCategory
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export type ProjectCategory = "web" | "mobile" | "desktop" | "api"

export interface ProjectFilter {
  key: string
  label: string
}
