export {}

declare global {
  interface Window {
    Intercom?: (command: string, ...params: any[]) => void
    intercomSettings?: {
      app_id: string
      action_color?: string
      hide_default_launcher?: boolean
    }
  }
}
