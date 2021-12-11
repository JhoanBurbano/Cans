import {
	GET_CANS,
	ORDER_ASC,
	ORDER_DESC,
	ORDER_FAT,
	ORDER_FIT,
	ORDER_MAX,
	ORDER_MIN,
	TEMPS,
	FILTER,
	SEARCH,
	CAN,
	PAGINATION,
	PAG
} from './types';
import axios from 'axios';
const locahost = 'http://localhost:3001/';

export const getCans = () => {
	return async function(dispatch) {
		try {
			const res = await axios(`${locahost}dogs`);
			console.log(res);
			const payload = res.data.map((e) => {
                if(e.hasOwnProperty('temps')){
                    if (e.temps && typeof e.temps === 'string') {
                        const temps = e.temps.split(', ');
                        return {
                            ...e,
                            temps: temps
                        };
                    } else {
                        const _temps = e.temps.map((temp) => temp.name);
                        return {
                            ...e,
                            temps: _temps
                        };
                    }
                }else {
                    return e;
                }

			}).filter(Boolean);
			return dispatch({
				type: GET_CANS,
				payload
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const getTemps = () => {
	return async function(dispatch) {
		try {
			const res = await axios(`${locahost}temperament`);
			const payload = res.data;
			return dispatch({
				type: TEMPS,
				payload
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const newCan = async (state) => {
	try {
		await axios.post(`${locahost}dog`, state);
		console.log(`se ha creado el can: ${state.name}`)
		return true;
	} catch (error) {
		console.log(error);
	}
};

export const [ activePage, getPages, viewCan, search, filterBy, orderAsc, orderDesc, orderFat, orderFit, orderMax, orderMin ] = [
	(payload) => {
		return { type: PAG, payload };
	},
	() => {
		return { type: PAGINATION };
	},
	(payload) => {
		return { type: CAN, payload };
	},
	(payload) => {
		return { type: SEARCH, payload };
	},
	(payload) => {
		return { type: FILTER, payload };
	},
	() => {
		return { type: ORDER_ASC };
	},
	() => {
		return { type: ORDER_DESC };
	},
	() => {
		return { type: ORDER_FAT };
	},
	() => {
		return { type: ORDER_FIT };
	},
	() => {
		return { type: ORDER_MAX };
	},
	() => {
		return { type: ORDER_MIN };
	}
];
