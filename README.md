# isomorphic-web-streams

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme) [![license](https://img.shields.io/github/license/joeltg/isomorphic-web-streams)](https://opensource.org/licenses/MIT) [![NPM version](https://img.shields.io/npm/v/isomorphic-web-streams)](https://www.npmjs.com/package/isomorphic-web-streams) ![TypeScript types](https://img.shields.io/npm/types/bisomorphic-web-streamst) ![lines of code](https://img.shields.io/tokei/lines/github/joeltg/isomorphic-web-streams)

Isomorphic web streams for Node and the browser.

This library is TypeScript-native, ESM-only, and has zero dependencies. It uses [conditional exports](https://nodejs.org/api/packages.html#packages_conditional_exports) to re-export from `node:stream/web` in Node environments and re-export from the global scope in the browser. Only APIs that are implemented in Node and all major browsers are exposes; for now, **this only includes the `ReadableStream` constructor**. `WriteableStream`, `TransformStream`, and others will be added when Firefox implements them.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm i isomorphic-web-streams
```

## Usage

```typescript
import { ReadableStream } from "isomorphic-web-streams"

const s = new ReadableStream(/* ... */)
```

## Contributing

If you have a suggestion to improve this library, feel free to open an issue to discuss it.

## License

MIT © 2021 Joel Gustafson
