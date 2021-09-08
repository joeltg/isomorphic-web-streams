export interface ReadableStream<R = any> {
	readonly locked: boolean
	cancel(reason?: any): Promise<void>
	getReader(): ReadableStreamDefaultReader<R>
	tee(): [ReadableStream<R>, ReadableStream<R>]
}

export type ReadableStreamConstructor = {
	prototype: ReadableStream
	new <R = any>(
		underlyingSource?: UnderlyingSource<R>,
		strategy?: QueuingStrategy<R>
	): ReadableStream<R>
}
