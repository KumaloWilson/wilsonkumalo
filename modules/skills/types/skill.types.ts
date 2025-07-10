export interface Skill {
  name: string
  level: number
  category: string
  icon?: string
}

export type SkillCategoryType = "Frontend" | "Backend" | "Database" | "Cloud" | "DevOps" | "Design"

export interface SkillCategory {
  name: SkillCategoryType
  skills: Skill[]
}
