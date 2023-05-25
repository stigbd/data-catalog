import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const datasetsPlugin = createPlugin({
  id: 'datasets',
  routes: {
    root: rootRouteRef,
  },
});

export const DatasetsPage = datasetsPlugin.provide(
  createRoutableExtension({
    name: 'DatasetsPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
