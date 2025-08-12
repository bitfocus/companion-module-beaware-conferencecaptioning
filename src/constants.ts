import type { DropdownChoice } from '@companion-module/base'

export interface DropdownChoiceWithButtonText extends DropdownChoice {
	buttonText: string
}
export const CONFCAPCOMMANDS: DropdownChoiceWithButtonText[] = [
	{ id: 'testRemoteConnection', label: 'Test Remote Connection', buttonText: 'Test Remote Connection' },
	{ id: 'testLocalConnection', label: 'Test Local Connection', buttonText: 'Test Local Connection' },
	{ id: 'startTranscribing', label: 'Start transcribing', buttonText: 'Start transcribing' },
	{ id: 'stopTranscribing', label: 'Stop transcribing', buttonText: 'Stop transcribing' },
	{ id: 'showCaptions', label: 'Show captions', buttonText: 'Show captions' },
	{ id: 'hideCaptions', label: 'Hide captions', buttonText: 'Hide captions' },
] as const
