# next-markdown

Adds a Webpack loader for importing `.md` files as HTML to the Next.js config.

## How to use

First, add the loader to the Next.js configuration in `next.config.js`:

```js
const withMarkdown = require('@stefanprobst/next-markdown')(/* options */)

const nextConfig = {
  /** ... */
}

module.exports = withMarkdown(nextConfig)
```

Markdown files can then be imported as HTML. Frontmatter data is accessible on
the named `data` export:

```tsx
import html, { data } from '@/content/faq.md'

export default function Page() {
  return (
    <main>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}>
    </main>
  )
}
```

## Options

See [`markdown-loader`](https://github.com/stefanprobst/markdown-loader) for
options to enable parsing inline HTML.

## Typescript

To make typescript understand `.md` imports, add the following to
`next-env.d.ts`:

```ts
/// <reference types="@stefanprobst/next-markdown" />
```
