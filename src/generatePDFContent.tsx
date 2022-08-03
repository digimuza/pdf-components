import renderToString from 'preact-render-to-string'
import { Content } from './components'
import { HtmlDoc, RawContent } from './components/html'

export function generatePdfBase(pages: RawContent[]) {
	return renderToString(<HtmlDoc pages={pages}></HtmlDoc>)
}
