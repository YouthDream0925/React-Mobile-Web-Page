import { lazy } from 'react';

const MobileWebPageConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: true,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  routes: [
    {
      path: '/mobile/test',
      component: lazy(() => import('./MobileWebPage')),
    },
  ],
};

export default MobileWebPageConfig;
