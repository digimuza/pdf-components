import * as P from 'ts-prime'
import { JSX } from 'preact'
import renderToString from 'preact-render-to-string'
import { HtmlDoc } from './html'

export type Format = 'A3' | 'A4' | 'A5' | 'A6' | { height: number; width: number }
export interface Content {
	content: JSX.Element | string
	format: Format
	landscape?: boolean
}

export function page(data: Content) {
	if (P.isObject(data.content)) {
		const server = !!process.env.LIVE_SERVER
		const content = renderToString(
			data.content,
			{},
			{
				pretty: true,
			}
		)
		return {
			...data,
			content: server
				? content
				: renderToString(
						<HtmlDoc
							pages={[
								{
									...data,
									content,
								},
							]}
						></HtmlDoc>
				  ),
		}
	}
	return data
}
