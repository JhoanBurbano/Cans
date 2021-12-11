import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { _Card } from '../../stl-cmp';
import { viewCan } from '../../redux/actions/actions';

const CardCan = ({ id, name, picture, temps, weight, height, yearsOfLife, viewCan }) => {
	const [ minHeight, maxHeight ] = height.split(' - ');
	const [ minWeight, maxWeight ] = weight.split(' - ');
	// const _temp = temp.split(', ')
	const [ minYears, maxYears ] = yearsOfLife.slice(0, 7).split(' - ');
	return (
		<_Card>
			<div className="img">
                <div className="buttons">
                <button><p>❤️</p></button>
                {/* <button><NavLink to={`can/${id}`}>👁</NavLink>
                </button> */}
                </div>
				<img src={picture} alt={name} />
			</div>
			<div className="desc">
				<h3><NavLink onClick={()=>{viewCan(id)}} to={`can/${id}`}>{name + ' 📑'}</NavLink></h3>
				<p className="height">
					<p>Altura</p> 
					<div>
						<p>{`min: ${minHeight}cm`}</p>
						<p>{`max: ${maxHeight?`${maxHeight}cm`:`NN`}`}</p>
					</div>
				</p>
				<p className="height">
                <p>Peso</p>
					<div>
						<p>{`min: ${minWeight}kg`}</p>
						<p>{`max: ${maxWeight?`${maxWeight}kg`:`NN`}`}</p>
					</div>
				</p>
				<p className="years"> <b>Años de vida </b> {maxYears?`de ${minYears} a ${maxYears} años`:`${minYears.slice(0, 3)} años`}</p>
				<p className="temps">
					<p>Temperamentos:</p> {temps?.map((e) => <b>{e}</b>)}
				</p>
			</div>
		</_Card>
	);
};

export default connect(null, { viewCan })(CardCan);
