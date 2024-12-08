declare namespace NetlifyIdentity {
    interface User {
      id: string;
      email?: string;
      [key: string]: any;
    }
  
    interface NetlifyIdentityAPI {
      on: (event: 'init' | 'login' | 'logout' | 'error', callback: (user?: User) => void) => void;
      open: (event?: 'login' | 'signup') => void;
      close: () => void;
      currentUser: () => User | null;
    }
  }
  
  declare global {
    interface Window {
      netlifyIdentity: NetlifyIdentityAPI;
    }
  }