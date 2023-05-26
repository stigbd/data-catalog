/* src/routes.ts */
import { createRouteRef } from '@backstage/core-plugin-api';

// Note: This route ref is for internal use only, don't export it from the plugin
export const rootRouteRef = createRouteRef({
  id: 'datasets',
});
