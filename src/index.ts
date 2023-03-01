import Waline from './Waline';

import type {WalineInitOptions} from '@waline/client';

export type WalineOptions = Omit<WalineInitOptions, 'el'>;
export type WalineProps = Partial<WalineOptions>;

export default Waline;

declare global {
	interface Window {
		walineOptions: WalineOptions;
	}
}
