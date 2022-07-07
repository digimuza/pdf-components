import * as P from 'ts-prime'
import { VNode } from 'preact'
import renderToString from 'preact-render-to-string'

export type Format = 'A3' | 'A4' | 'A5' | 'A6' | [x: number, y: number]
export interface Content {
	content: string
	format: Format
	landscape?: boolean
}

export function page(data: Content | { content: string | VNode<{}> }) {
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
