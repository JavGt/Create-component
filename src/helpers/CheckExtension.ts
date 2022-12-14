import { EXTENSION_OPTIONS, STRUCTURE_OPTIONS } from '../constants';
import { templateJsx, templateTsx } from '../templates';

export const checkExtension = (COMPONENT_STRUCTURE: string) => {
	const isTs = COMPONENT_STRUCTURE === STRUCTURE_OPTIONS.ts;

	return {
		extension: isTs ? EXTENSION_OPTIONS.ts : EXTENSION_OPTIONS.js,
		template: isTs ? templateTsx : templateJsx,
	};
};
