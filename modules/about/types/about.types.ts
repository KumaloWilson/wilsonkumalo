export interface AboutStats {
  label: string
  value: string
}

export interface AboutApproach {
  title: string
  description: string
}

export interface AboutContent {
  story: string[]
  stats: AboutStats[]
  approaches: AboutApproach[]
}
