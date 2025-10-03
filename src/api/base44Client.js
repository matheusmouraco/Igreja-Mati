import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68918da7bcc5c7e2c4bad3c1", 
  requiresAuth: true // Ensure authentication is required for all operations
});
