import type * as web_streams from "./web_streams.js"

declare module "stream/web" {
	const ReadableStream: web_streams.ReadableStreamConstructor
}

import { ReadableStream as readable_stream } from "node:stream/web"

export type ReadableStream = web_streams.ReadableStream
export const ReadableStream = readable_stream
