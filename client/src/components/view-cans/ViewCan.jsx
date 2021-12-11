import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { _Can } from '../../stl-cmp';
import { viewCan, getCans } from '../../redux/actions/actions';

const ViewCan = ({ can, viewCan, getCans }) => {
    const params = useParams();
    const navigate = useNavigate();
    if (!can.hasOwnProperty('id')){
        navigate("/");
    }

    
    const {id, name, picture, temps, weight, height, yearsOfLife} = can
    const [ minHeight, maxHeight ] = height.split(' - ');
	const [ minWeight, maxWeight ] = weight.split(' - ');
	const [ minYears, maxYears ] = yearsOfLife.slice(0, 7).split(' - ');
    return (
        <_Can>
            <div className='img'>
            <img src={picture} alt="name" />
            </div>
			<div className="desc">
				<h3>{name}</h3>
				<p className="height">
					<p>Altura</p> 
					<div>
						<p>{`min: ${minHeight}cm`}</p>
						<p>{`max: ${maxHeight}cm`}</p>
					</div>
				</p>
				<p className="height">
                <p>Peso</p>
					<div>
						<p>{`min: ${minWeight}kg`}</p>
						<p>{`max: ${maxWeight}kg`}</p>
					</div>
				</p>
				<p className="years"> <b>Años de vida </b> {maxYears?`de ${minYears} a ${maxYears} años`:`${minYears.slice(0, 3)} años`}</p>
				<p className="temps">
					<p>Temperamentos:</p> {temps?.map((e) => <b>{e}</b>)}
				</p>
			</div>
        </_Can>
    )
}
const mapStateToProps = ({can})=>({can})

export default connect(mapStateToProps, {viewCan, getCans })(ViewCan)
