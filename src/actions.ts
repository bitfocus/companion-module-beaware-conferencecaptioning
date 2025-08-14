import type { ModuleInstance } from './main.js'
import { InstanceStatus } from '@companion-module/base'

async function sendCommand(self: ModuleInstance, url: string): Promise<void> {
	if (!url.includes('http://')) {
		throw new Error(
			"To use this functionality, the Localhost URL must start with http://. Here's a video on how to get it: https://vimeo.com/1064921264",
		)
	}

	if (
		!url.includes('index.html') &&
		!url.includes('LiteGetStream') &&
		!url.endsWith('start') &&
		!url.endsWith('stop') &&
		!url.endsWith('show') &&
		!url.endsWith('hide')
	) {
		throw new Error(
			"To use this functionality, the Localhost URL must be in this format http://10.0.0.199:8080/index.html. Here's a video on how to get it: https://vimeo.com/1064921264",
		)
	}

	const response = await fetch(url, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	})

	if (response.status === 200) {
		self.updateStatus(InstanceStatus.Ok)
	} else {
		self.updateStatus(InstanceStatus.ConnectionFailure)
	}
}

export function UpdateActions(self: ModuleInstance): void {
	self.setActionDefinitions({
		get_remote: {
			name: 'Test Stream Connection',
			options: [],
			callback: async () => {
				const url = `https://api.deafassistant.com/stream/LiteGetStream?streamName=${self.config.streamName}`
				await sendCommand(self, url)
			},
		},
		get_localhost: {
			name: 'Test Localhost Connection',
			options: [],
			callback: async () => {
				const url = self.config.localhostUrl.replace('index.html', 'stream/LiteGetStream')
				await sendCommand(self, url)
			},
		},
		start_transcribing: {
			name: 'Start transcribing',
			options: [],
			callback: async () => {
				const url = self.config.localhostUrl.replace('index.html', 'start')
				await sendCommand(self, url)
			},
		},
		stop_transcribing: {
			name: 'Stop transcribing',
			options: [],
			callback: async () => {
				const url = self.config.localhostUrl.replace('index.html', 'stop')
				await sendCommand(self, url)
			},
		},
		show_captions: {
			name: 'Show Captions',
			options: [],
			callback: async () => {
				const url = self.config.localhostUrl.replace('index.html', 'show')
				await sendCommand(self, url)
			},
		},
		hide_captions: {
			name: 'Hide Captions',
			options: [],
			callback: async () => {
				const url = self.config.localhostUrl.replace('index.html', 'hide')
				await sendCommand(self, url)
			},
		},
	})
}
