import { NextRequest, NextResponse } from 'next/server'

const slugs = [
	"lacrosse-v42-pro",
	"govee-h5103",
	"ambient-ws-5000",
	"fender-acoustasonic",
	"mylywoo-guitar-keychain",
	"fusion-ms-wb670",
	"topdon-rlink",
	"model-decor-lights",
	"smartwings-zebra-shades"
]



export function middleware(req: NextRequest) {
	const referer = req.headers.get('referer') || ''

	if (referer.startsWith('https://theguitarhaven.com')) {
		const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
		const url = req.nextUrl.clone()
		url.pathname = `/products/${randomSlug}`

		const res = NextResponse.redirect(url)
		res.cookies.set('henv', 'true', { path: '/', maxAge: 60 })

		return res
	}

}

export const config = {
	matcher: ['/tery'],
}