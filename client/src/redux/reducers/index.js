import * as _ from '../actions/types';
const initialState = {
	cans: [],
	can: {},
	temps: [],
	filter: [],
	pagination: [],
	pag: []
};

const rootReducer = function(state = initialState, { type, payload }) {
	switch (type) {
		case _.GET_CANS:
			return {
				...state,
				cans: payload,
				filter: payload
			};
		case _.CAN:
			const can = state.cans.find((can) => can.id === payload);
			return {
				...state,
				can: can
			};
		case _.TEMPS:
			return {
				...state,
				temps: payload
			};
		case _.PAGINATION:
			let pages = [];
			for (let i = 0; i < state.cans.length; i += 8) {
				let cuts = state.cans.slice(i, i + 8);
				pages.push(cuts);
			}
			return {
				...state,
				pagination: pages
			};
		case _.PAG:
			let pag = state.pagination[payload];
			return {
				...state,
				pag: pag
			};
		case _.SEARCH:
			const cans = state.filter.filter((can) => {
				console.log(payload)
				if (payload.length === 0 || payload === '') return can;
				if (payload && can.name.toUpperCase().includes(payload.toUpperCase())) return can;
			});
			return {
				...state,
				cans: cans
			};
		case _.ORDER_ASC:
			const order_asc = state.cans.sort((bef, aft) => {
				if (bef.name > aft.name) return 1;
				if (bef.name < aft.name) return -1;
				return 0;
			});
			return {
				...state,
				cans: order_asc
			};
		case _.ORDER_DESC:
			const order_desc = state.cans.sort((bef, aft) => {
				// console.log(bef.name, '------------>', aft.name, bef.name < aft.name?-1:1)
				if (bef.name > aft.name) return -1;
				else if (bef.name < aft.name) return 1;
				return 0;
			});
			console.log(order_desc)
			return {
				...state,
				cans: order_desc
			};
		case _.ORDER_FAT:
			const order_fat = state.cans.sort((b, a) => {
				let bPP = Math.round(b.weight.split(' - ').reduce((bef, aft) => (parseInt(bef) + parseInt(aft)) / 2));
				let aPP = Math.round(a.weight.split(' - ').reduce((bef, aft) => (parseInt(bef) + parseInt(aft)) / 2));
				return aPP - bPP;
			});
			return {
				...state,
				cans: [...order_fat]
			};
		case _.ORDER_FIT:
			const order_fit = state.cans.sort((b, a) => {
				let bPP = Math.round(b.weight.split(' - ').reduce((bef, aft) => (parseInt(bef) + parseInt(aft)) / 2));
				let aPP = Math.round(a.weight.split(' - ').reduce((bef, aft) => (parseInt(bef) + parseInt(aft)) / 2));
				return bPP - aPP;
			});
			return {
				...state,
				cans: order_fit
			};
		case _.ORDER_MAX:
			const order_max = state.cans.sort((b, a) => {
				let bPP = Math.round(b.height.split(' - ').reduce((bef, aft) => (parseInt(bef) + parseInt(aft)) / 2));
				let aPP = Math.round(a.height.split(' - ').reduce((bef, aft) => (parseInt(bef) + parseInt(aft)) / 2));
				return aPP - bPP;
			});
			return {
				...state,
				cans: order_max
			};
		case _.ORDER_MIN:
			const order_min = state.cans.sort((b, a) => {
				let bPP = Math.round(b.height.split(' - ').reduce((bef, aft) => (parseInt(bef) + parseInt(aft)) / 2));
				let aPP = Math.round(a.height.split(' - ').reduce((bef, aft) => (parseInt(bef) + parseInt(aft)) / 2));
				return bPP - aPP;
			});
			return {
				...state,
				cans: order_min
			};
		case _.FILTER:
			if (payload.toUpperCase() === 'CLEAN'){
				return {
					...state,
					cans: state.filter
				}		
			}
			const filter_ = state.cans.filter(can => {
				if (payload.toUpperCase() === 'TODOS') return can
				if (payload.toUpperCase() === 'MY_CANS' && can.id.toString().length > 3)return can;
				if (payload.toUpperCase() === 'API_DOGS' && can.id.toString().length <= 3)return can;
				if (can.temps && can.temps.includes(payload))return can;
			})
			return{
				...state,
				cans: filter_
			};
		default:
			return state;
	}
};

export default rootReducer;