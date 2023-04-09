# isomorphic-web-streams

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme) [![license](https://img.shields.io/github/license/joeltg/isomorphic-web-streams)](https://opensource.org/licenses/MIT) [![NPM version](https://img.shields.io/npm/v/isomorphic-web-streams)](https://www.npmjs.com/package/isomorphic-web-streams) ![TypeScript types](https://img.shields.io/npm/types/isomorphic-web-streams) ![lines of code](https://img.shields.io/tokei/lines/github/joeltg/isomorphic-web-streams)

Isomorphic Web Streams for Node and the browser.

This library is TypeScript-native, ESM-only, and has zero dependencies. It uses [conditional exports](https://nodejs.org/api/packages.html#packages_conditional_exports) to re-export the [Web Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) interface classes from `node:stream/web` in Node environments and re-export from the global scope using `globalThis` in all other environments.

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
import {
	ReadableStream,
	WritableStream,
	TransformStream,
	ReadableStreamDefaultReader,
	ReadableStreamDefaultController,
	ReadableByteStreamController,
	ReadableStreamBYOBReader,
	ReadableStreamBYOBRequest,
	WritableStreamDefaultWriter,
	WritableStreamDefaultController,
	TransformStreamDefaultController,
	ByteLengthQueuingStrategy,
	CountQueuingStrategy,
} from "isomorphic-web-streams"

const s = new ReadableStream(/* ... */)
```

## Contributing

If you have a suggestion to improve this library, feel free to open an issue to discuss it.

## License

MIT © 2023 Joel Gustafson
