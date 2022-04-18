export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '625d3277a06569169f73c321',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-moaozcxw',
                  apiId: '3bf115bd-cb04-4037-a72b-b3fd462ca5d9'
                },
                {
                  buildHookId: '625d3277803dea2557a087f8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-j2yc9tm4',
                  apiId: '89a48b67-aa1b-4161-96aa-6748222a6972'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/systemshock76/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-j2yc9tm4.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
