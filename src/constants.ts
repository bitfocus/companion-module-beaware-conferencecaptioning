export const CONFCAPCOMMANDS = [
	{ id: 'testRemoteConnection', label: 'Test Remote Connection', actionId: 'get_remote' },
	{ id: 'testLocalConnection', label: 'Test Local Connection', actionId: 'get_localhost' },
	{ id: 'startTranscribing', label: 'Start transcribing', actionId: 'start_transcribing' },
	{ id: 'stopTranscribing', label: 'Stop transcribing', actionId: 'stop_transcribing' },
	{ id: 'showCaptions', label: 'Show captions', actionId: 'show_captions' },
	{ id: 'hideCaptions', label: 'Hide captions', actionId: 'hide_captions' },
] as const
