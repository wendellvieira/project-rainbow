import { RouteObject } from 'react-router-dom';

import { RainbowPage } from '../pages/Rainbow';

export default [
	{
		path: '/',
		element: <RainbowPage />,
	},
] as RouteObject[];
