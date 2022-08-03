import * as P from 'ts-prime'
import { JSX } from 'preact'
import renderToString from 'preact-render-to-string'

export type Format = 'A3' | 'A4' | 'A5' | 'A6' | { height: number; width: number }
export interface Content {
	content: string
	format: Format
	landscape?: boolean
}

export function page(data: Content | { content: string | JSX.Element }) {
	if (P.isObject(data.content)) {
		return {
			...data,
			content: renderToString(
				data.content,
				{},
				{
					pretty: true,
				}
			),
		}
	}
	return data
}
