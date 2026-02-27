declare module "@sanity/sdk-react" {
  // minimal typing for useClient hook
  export function useClient(options?: { apiVersion?: string } | undefined): any;
}
