import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { datasetsPlugin, DatasetsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(datasetsPlugin)
  .addPage({
    element: <DatasetsPage />,
    title: 'Datasets Page',
    path: '/datasets'
  })
  .render();
