import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './AppRouter';

const container = document.getElementById('root');
if (!container) throw new Error('Root element with id "root" not found');

createRoot(container).render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>
);