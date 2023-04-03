import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(

  // https://vitepress.dev/reference/site-config
  defineConfig({
    title: "Rosanoverse",
    description: "Mapping my universe",
    themeConfig: {

      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Examples', link: '/markdown-examples' }
      ],

      sidebar: [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/rosano/docs' }
      ],

      editLink: {
        pattern: 'https://github.com/rosano/docs/edit/master/:path',
        text: 'Edit this page on GitHub',
      },
          
    },

    // optionally, you can pass MermaidConfig
    mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
  }),
  
);
