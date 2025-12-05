export { };

declare global {
  interface Window {
    Intercom?: (command: string, ...params: any[]) => void;
    intercomSettings?: {
      app_id: string;
      action_color?: string;
      hide_default_launcher?: boolean;
    };
  }
}

declare module "/pagefind/pagefind.js" {
  export function search(term: string): Promise<{
    results: Array<{
      id: string;
      data: () => Promise<any>;
      url: string;
    }>;
  }>;
  export function options(opts: Record<string, any>): Promise<void>;
}
