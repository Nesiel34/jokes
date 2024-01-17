export interface IJokes {
  category: string
  type: string
  setup?: string
  delivery?: string
  flags: Flags
  id: number
  error: boolean
  joke?: string
}

export interface Flags {
  nsfw: boolean
  religious: boolean
  political: boolean
  racist: boolean
  sexist: boolean
}
