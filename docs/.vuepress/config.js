module.exports = {
  base: '/docs/',
  dest: 'dist/docs',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'ja-JP', // this will be set as the lang attribute on <html>
      title: '東京都 新型コロナウイルス感染症対策サイト | Docs'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Tokyo COVID-19 Task Force website | Docs'
    },
    '/es/': {
      lang: 'es-ES',
      title: 'Sitio web del Grupo de trabajo COVID-19 de Tokio | Docs'
    },
    '/ko/': {
      lang: 'ko-KR',
      title: '도쿄도 코로나19 대책 사이트 | Docs'
    },
    '/zh_TW/': {
      lang: 'zh-TW',
      title: '東京都 新型冠狀病毒疫情中心 | Docs'
    },
    '/zh_CN/': {
      lang: 'zh-CN',
      title: '东京都 新型冠状病毒对策网 | Docs'
    },
    '/vi/': {
      lang: 'vi-VN',
      title: 'Cổng thông tin chống dịch CoVid-19 của TP Tokyo | Docs'
    },
    '/th/': {
      lang: 'th-TH',
      title: 'Tokyo COVID-19 Task Force website | Docs'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Site web du group de travail Tokyo COVID-19 | Docs'
    },
    '/pt_BR/': {
      lang: 'pt-BR',
      title: 'Site da Força Tarefa de Tóquio para o COVID-19 | Docs'
    }
  },
  themeConfig: {
    repo: 'tokyo-metropolitan-gov/covid19',
    docsDir: 'docs',
    editLinks: true,
    smoothScroll: true,
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: '日本語',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        sidebar: [
          {
            title: '東京都 新型コロナウイルス感染症対策サイト', // required
            path: '/', // optional, link of the title, which should be an absolute path and must exist
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
              '../CONTRIBUTING.md',
              '../CODE_OF_CONDUCT.md',
              '../TRANSLATION.md',
              '../FORKED_SITES.md',
              '../FOR_DEVELOPERS.md'
            ]
          }
        ]
      },
      '/en/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        sidebar: [
          {
            title: 'Tokyo COVID-19 Task Force website', // required
            path: '/en/', // optional, link of the title, which should be an absolute path and must exist
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
              '/en/CONTRIBUTING.md',
              '/en/CODE_OF_CONDUCT.md',
              '/en/FOR_DEVELOPERS.md'
            ]
          }
        ]
      },
      '/es/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'Español',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        sidebar: [
          {
            title: 'Sitio web del Grupo de trabajo COVID-19 de Tokio', // required
            path: '/es/', // optional, link of the title, which should be an absolute path and must exist
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
              '/es/CONTRIBUTING.md',
              '/es/CODE_OF_CONDUCT.md',
              '/es/FOR_DEVELOPERS.md'
            ]
          }
        ]
      },
      '/fr/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'Français',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        sidebar: [
          {
            title: 'Site web du group de travail Tokyo COVID-19', // required
            path: '/fr/', // optional, link of the title, which should be an absolute path and must exist
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
              '/fr/CONTRIBUTING.md',
              '/fr/CODE_OF_CONDUCT.md',
              '/fr/FOR_DEVELOPERS.md'
            ]
          }
        ]
      },
      '/ko/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: '한국어',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        sidebar: [
          {
            title: '도쿄도 코로나19 대책 사이트', // required
            path: '/ko/', // optional, link of the title, which should be an absolute path and must exist
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
              '/ko/CONTRIBUTING.md',
              '/ko/CODE_OF_CONDUCT.md',
              '/ko/FOR_DEVELOPERS.md'
            ]
          }
        ]
      },
      '/zh_TW/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: '繁體中文',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        sidebar: [
          {
            title: '東京都 新型冠狀病毒疫情中心', // required
            path: '/zh_TW/', // optional, link of the title, which should be an absolute path and must exist
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
              '/zh_TW/CONTRIBUTING.md',
              '/zh_TW/CODE_OF_CONDUCT.md',
              '/zh_TW/FOR_DEVELOPERS.md'
            ]
          }
        ]
      },
      '/zh_CN/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: '简体中文',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        sidebar: [
          {
            title: '东京都 新型冠状病毒对策网', // required
            path: '/zh_CN/', // optional, link of the title, which should be an absolute path and must exist
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
              '/zh_CN/CONTRIBUTING.md',
              '/zh_CN/CODE_OF_CONDUCT.md',
              '/zh_CN/FOR_DEVELOPERS.md'
            ]
          }
        ]
      },
      '/vi/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'Tiếng Việt',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        sidebar: [
          {
            title: 'Cổng thông tin chống dịch CoVid-19 của TP Tokyo', // required
            path: '/vi/', // optional, link of the title, which should be an absolute path and must exist
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
              '/vi/CONTRIBUTING.md',
              '/vi/CODE_OF_CONDUCT.md',
              '/vi/FOR_DEVELOPERS.md'
            ]
          }
        ]
      },
      '/th/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'ภาษาไทย',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        sidebar: [
          {
            title: 'Tokyo COVID-19 Task Force website', // required
            path: '/th/', // optional, link of the title, which should be an absolute path and must exist
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
              '/th/CONTRIBUTING.md',
              '/th/CODE_OF_CONDUCT.md',
              '/th/FOR_DEVELOPERS.md'
            ]
          }
        ]
      },
      '/pt_BR/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'Português',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        sidebar: [
          {
            title: 'Site da Força Tarefa de Tóquio para o COVID-19', // required
            path: '/pt_BR/', // optional, link of the title, which should be an absolute path and must exist
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
              '/pt_BR/CONTRIBUTING.md',
              '/pt_BR/CODE_OF_CONDUCT.md',
              '/pt_BR/FOR_DEVELOPERS.md'
            ]
          }
        ]
      }
    }
  }
}
