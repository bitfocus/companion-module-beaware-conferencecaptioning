import type { ModuleInstance } from './main.js'
import type { CompanionPresetDefinition, CompanionPresetDefinitions } from '@companion-module/base'
import { combineRgb } from '@companion-module/base'
import { CONFCAPCOMMANDS } from './constants.js'

export function UpdatePresets(self: ModuleInstance): void {
	const presets: CompanionPresetDefinitions = {}

	for (const command of CONFCAPCOMMANDS) {
		const preset: CompanionPresetDefinition = {
			type: 'button',
			category: 'ConferenceCaptioning',
			name: command.label,
			style: {
				size: 14,
				bgcolor: combineRgb(0, 0, 0),
				color: combineRgb(255, 255, 255),
				text: command.label,
			},
			steps: [
				{
					down: [
						{
							actionId: command.actionId,
							options: {
								[command.id]: command.id,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
		presets[command.id] = preset
	}

	self.setPresetDefinitions(presets)
}
