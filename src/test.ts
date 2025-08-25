// You can test the functioning of the connection between the module and the app by running this file with `node src/test.ts`
// const url = 'http://' + "192.168.0.148:8080/index.html".replace('index.html', 'stream/LiteGetStream')
const url = 'http://' + '192.168.0.148:8080/index.html'.replace('index.html', 'stop')

await sendCommand(url)

function urlChecker(url: string): boolean {
	if (
		url.includes('index.html') ||
		url.endsWith('start') ||
		url.endsWith('stop') ||
		url.endsWith('show') ||
		url.endsWith('hide')
	) {
		if (!url.includes(':8080')) {
			throw new Error(
				"To use this functionality, the Localhost URL must be in this format 10.0.0.199:8080/index.html. Here's a video on how to get it: https://vimeo.com/1064921264",
			)
		}
	} else if (url === 'api.deafassistant.com/stream/LiteGetStream?streamName=') {
		throw new Error(
			"To use this functionality, the stream name cannot be empty Here's a video on how to get it: https://vimeo.com/1064921264",
		)
	}
	return true
}
async function sendCommand(url: string): Promise<void> {
	urlChecker(url)
	const response = await fetch(url, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	})

	if (response.status === 200) {
		console.log(`Command sent successfully to ${url}`)
	} else {
		console.log(`Command sending failed to ${url}`)
	}
	console.log(response)
}
