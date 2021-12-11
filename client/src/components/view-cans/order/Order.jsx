import { connect } from 'react-redux';
import { _Order } from '../../../stl-cmp';
import { orderAsc, orderDesc, orderMin, orderMax, orderFit, orderFat } from '../../../redux/actions/actions';

const Order = ({ orderAsc, orderDesc, orderMin, orderMax, orderFit, orderFat }) => {
	const OrderBy = ({ target: { value } }) => {
		switch (value) {
			case 'A-Z':
				return (orderAsc());
			case 'Z-A':
                return (orderDesc());
			case '1-10':
                return (orderMin());
			case '10-1':
                return (orderMax());
			case 'H-L':
                return (orderFat());
			case 'L-H':
                return (orderFit());
			default:
				break;
		}
	};

	return (
		<_Order>
			<select onChange={OrderBy} name="" id="">
				<option value="" selected disabled>
					Ordenar por...
				</option>
				<option value="A-Z">Nombre (a-z)</option>
				<option value="Z-A">Nombre (z-a)</option>
				<option value="1-10">Altura (1-10)</option>
				<option value="10-1">Altura (10-1)</option>
				<option value="H-L">Peso (1-10)</option>
				<option value="L-H">Peso (10-1)</option>
			</select>
		</_Order>
	);
};

export default connect(null, { orderAsc, orderDesc, orderMin, orderMax, orderFit, orderFat })(Order);
