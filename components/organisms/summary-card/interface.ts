export interface SummaryCardProps {
  title: string
  status: 'pending' | 'completed' | 'failed'
  progress: number
}
