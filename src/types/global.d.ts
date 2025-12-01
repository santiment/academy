export { }

declare global {
  interface Window {
    Intercom?: (command: string, ...params: any[]) => void
  }
}
