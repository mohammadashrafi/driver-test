export interface FeedbackOptions {
  label: string
  value: string | number
}

export interface FeedbackProps {
  title?: string
  options: FeedbackOptions[]
  other?: boolean | FeedbackOptions
  getValue?: (value: string | number) => void
  getOtherValue?: (value: string) => void
}
