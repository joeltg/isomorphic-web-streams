import type * as web_streams from "./web_streams.js"

export type ReadableStream<R = any> = web_streams.ReadableStream<R>
export const ReadableStream: web_streams.ReadableStreamConstructor =
	window.ReadableStream
