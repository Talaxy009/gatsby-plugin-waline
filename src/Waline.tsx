import React, {useEffect, useRef} from 'react';
import {init} from '@waline/client';

import type {WalineInstance} from '@waline/client';
import type {WalineProps} from '.';

/**
 * Waline React Component
 * @param props WalineProps
 */
export default function Waline(props: WalineProps) {
	const walineInstanceRef = useRef<WalineInstance | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		walineInstanceRef.current = init({
			...window.walineOptions,
			...props,
			el: containerRef.current,
		});

		return () => walineInstanceRef.current?.destroy();
	}, []);

	useEffect(() => {
		walineInstanceRef.current?.update(props);
	}, [props]);

	return <div id="waline-container" ref={containerRef} />;
}
