import history from './history';

export const getCurrentData = pages =>
	pages ? pages[history.location.pathname.substr(1) || 'home'] : null;
