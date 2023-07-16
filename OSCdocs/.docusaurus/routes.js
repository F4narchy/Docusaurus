import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '1fd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5dc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'bd4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '9d4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'f07'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'd23'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'a67'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '125'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'a69'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '0d4'),
    exact: true
  },
  {
    path: '/blog/greetings',
    component: ComponentCreator('/blog/greetings', '520'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '775'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'c08'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '32c'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '985'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'b81'),
    exact: true
  },
  {
    path: '/blog/tags/greetings',
    component: ComponentCreator('/blog/tags/greetings', '9f1'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '433'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '24e'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '7f1'),
    exact: true
  },
  {
    path: '/index%20copy',
    component: ComponentCreator('/index%20copy', '57b'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '6d2'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '3ae'),
    routes: [
      {
        path: '/category/oscdocs---admin',
        component: ComponentCreator('/category/oscdocs---admin', 'ca9'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/oscdocs---client',
        component: ComponentCreator('/category/oscdocs---client', '20e'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/oscdocs---divers',
        component: ComponentCreator('/category/oscdocs---divers', 'e19'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/oscdocs---finance',
        component: ComponentCreator('/category/oscdocs---finance', '917'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/oscdocs---heimdall',
        component: ComponentCreator('/category/oscdocs---heimdall', '4f1'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/oscdocs---inventaire--mrp',
        component: ComponentCreator('/category/oscdocs---inventaire--mrp', '95a'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/oscdocs---marketing',
        component: ComponentCreator('/category/oscdocs---marketing', '2b5'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/oscdocs---partage-de-fichiers',
        component: ComponentCreator('/category/oscdocs---partage-de-fichiers', 'c93'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/oscdocs---productivité',
        component: ComponentCreator('/category/oscdocs---productivité', 'd83'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/oscdocs---ressources-humaines',
        component: ComponentCreator('/category/oscdocs---ressources-humaines', '483'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/oscdocs---services',
        component: ComponentCreator('/category/oscdocs---services', '4b6'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/oscdocs---site-web',
        component: ComponentCreator('/category/oscdocs---site-web', '1e5'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/oscdocs---support--assistance',
        component: ComponentCreator('/category/oscdocs---support--assistance', 'fa3'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/oscdocs---ventes',
        component: ComponentCreator('/category/oscdocs---ventes', '6e6'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/tutorial---basics',
        component: ComponentCreator('/category/tutorial---basics', '436'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/category/tutorial---extras',
        component: ComponentCreator('/category/tutorial---extras', '521'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCAdmin/bitwarden-admin',
        component: ComponentCreator('/OSCAdmin/bitwarden-admin', '4df'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCAdmin/grafana_admin',
        component: ComponentCreator('/OSCAdmin/grafana_admin', 'd3c'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCAdmin/guide-admin',
        component: ComponentCreator('/OSCAdmin/guide-admin', 'b2d'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCAdmin/heimdall-admin',
        component: ComponentCreator('/OSCAdmin/heimdall-admin', 'd96'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCAdmin/honey-pot-admin',
        component: ComponentCreator('/OSCAdmin/honey-pot-admin', 'b93'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCAdmin/odoo-admin',
        component: ComponentCreator('/OSCAdmin/odoo-admin', '3b9'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCAdmin/portainer-admin',
        component: ComponentCreator('/OSCAdmin/portainer-admin', '613'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCAdmin/uptime-kuma-admin',
        component: ComponentCreator('/OSCAdmin/uptime-kuma-admin', 'b8c'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCAdmin/zabbix-admin',
        component: ComponentCreator('/OSCAdmin/zabbix-admin', 'd38'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCAdmin/zammad-admin',
        component: ComponentCreator('/OSCAdmin/zammad-admin', '63d'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/guide-client',
        component: ComponentCreator('/OSCClient/guide-client', 'f2a'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Divers/en_construction',
        component: ComponentCreator('/OSCClient/Heimdall/Divers/en_construction', '50d'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Finance/convert-en',
        component: ComponentCreator('/OSCClient/Heimdall/Finance/convert-en', 'bf6'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Finance/en_construction',
        component: ComponentCreator('/OSCClient/Heimdall/Finance/en_construction', 'cc6'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Finance/note-de-frais-client',
        component: ComponentCreator('/OSCClient/Heimdall/Finance/note-de-frais-client', '659'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Finance/test',
        component: ComponentCreator('/OSCClient/Heimdall/Finance/test', '8f4'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/heimdall-client',
        component: ComponentCreator('/OSCClient/Heimdall/heimdall-client', '8b3'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Inventaire & MRP/en_construction',
        component: ComponentCreator('/OSCClient/Heimdall/Inventaire & MRP/en_construction', '05f'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Marketing/en_construction',
        component: ComponentCreator('/OSCClient/Heimdall/Marketing/en_construction', '270'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Partage de Fichiers/en_construction',
        component: ComponentCreator('/OSCClient/Heimdall/Partage de Fichiers/en_construction', '891'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Partage de Fichiers/fichiers-client',
        component: ComponentCreator('/OSCClient/Heimdall/Partage de Fichiers/fichiers-client', '0e5'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Productivité/en_construction',
        component: ComponentCreator('/OSCClient/Heimdall/Productivité/en_construction', '106'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Ressources Humaines/en_construction',
        component: ComponentCreator('/OSCClient/Heimdall/Ressources Humaines/en_construction', '2de'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Services/en_construction',
        component: ComponentCreator('/OSCClient/Heimdall/Services/en_construction', '174'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Site Web/en_construction',
        component: ComponentCreator('/OSCClient/Heimdall/Site Web/en_construction', 'cae'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Site Web/site-web-client',
        component: ComponentCreator('/OSCClient/Heimdall/Site Web/site-web-client', '50f'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Support & Assistance/en_construction',
        component: ComponentCreator('/OSCClient/Heimdall/Support & Assistance/en_construction', 'aaf'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Support & Assistance/support-et-assistance-client',
        component: ComponentCreator('/OSCClient/Heimdall/Support & Assistance/support-et-assistance-client', '4e8'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Ventes/caisse-client',
        component: ComponentCreator('/OSCClient/Heimdall/Ventes/caisse-client', '130'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/OSCClient/Heimdall/Ventes/en_construction',
        component: ComponentCreator('/OSCClient/Heimdall/Ventes/en_construction', '417'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/oscdocs-intro',
        component: ComponentCreator('/oscdocs-intro', 'fe8'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/tutorial-basics/congratulations',
        component: ComponentCreator('/tutorial-basics/congratulations', '058'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/tutorial-basics/create-a-blog-post', 'f87'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/tutorial-basics/create-a-document',
        component: ComponentCreator('/tutorial-basics/create-a-document', '3f4'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/tutorial-basics/create-a-page',
        component: ComponentCreator('/tutorial-basics/create-a-page', '744'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/tutorial-basics/deploy-your-site', '919'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/tutorial-basics/markdown-features',
        component: ComponentCreator('/tutorial-basics/markdown-features', '62c'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/tutorial-extras/manage-docs-versions', '367'),
        exact: true,
        sidebar: "oscdocsSidebar"
      },
      {
        path: '/tutorial-extras/translate-your-site',
        component: ComponentCreator('/tutorial-extras/translate-your-site', 'a1c'),
        exact: true,
        sidebar: "oscdocsSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
