module.exports = {
  plugins: ['tsdoc', 'simple-import-sort', 'jsx-a11y'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'always',
        },
      },
    ],
    'prettier/prettier': [
      2,
      {
        semi: false,
        singleQuote: true,
      },
    ],
    'tsdoc/syntax': 2,
    'simple-import-sort/imports': 2,
    'no-restricted-imports': [
      2,
      {
        patterns: ['./', '../'],
      },
    ],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      2,
      {
        tr: ['none', 'presentation'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': [
      2,
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      2,
      {
        ul: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        ol: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': [
      2,
      {
        tags: [],
        roles: ['tabpanel'],
      },
    ],
    'jsx-a11y/alt-text': 1 /* 代替の内容が必要な際にalt、aria-labelなどがあるかのチェック */,
    'jsx-a11y/aria-props': 1 /* 定義されていないaria属性（タイポ含む）をチェック */,
    'jsx-a11y/aria-role': 1 /* 存在しないもの、abstractなroleの使用をチェック */,
    'jsx-a11y/aria-unsupported-elements': 1 /* aria属性を使用できないタグで使用していないかチェック */,
    'jsx-a11y/label-has-associated-control': 1 /* フォームコントロールに対してラベルが必ず付与されているかチェック */,
    'jsx-a11y/heading-has-content': 1 /* 見出しタグや見出しコンポーネントに対して内容が含まれているかチェック */,
    'jsx-a11y/no-redundant-roles': 1 /* タグに重複したroleを付与していないかチェック */,
    'jsx-a11y/role-has-required-aria-props': 1 /* roleの使用において必要になるaria属性があるかチェック */,
    'jsx-a11y/tabindex-no-positive': 1 /* tabindexに0以上の数値が入っていないかチェック */,
  },
}
