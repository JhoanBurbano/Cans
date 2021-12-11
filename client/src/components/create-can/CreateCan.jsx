import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { newCan, getTemps } from '../../redux/actions/actions';
import { _Create } from '../../stl-cmp';

const CreateCan = ({ temps, getTemps }) => {
	useEffect(
		() => {
			(async () => {
				await getTemps();
			})();
		},
		[ getTemps ]
	);

	const [ state, setState ] = useState({
		name: '',
		picture: '',
		minHeight: '',
		maxHeight: '',
		minWeight: '',
		maxWeight: '',
		yearsOfLife: '',
		temps: []
	});


	const handlerChange = ({ target: { value, name } }) => {
		if (name === 'temps') {
			const _temps = [ ...state.temps, value ];
			setState({
				...state,
				[name]: _temps
			});
		} else {
			setState({
				...state,
				[name]: value
			});
		}
	};

	const dropTemp = ({target:{innerText}})=>{
		const _dropS = state.temps.filter(e => e !== innerText);
		setState({
			...state,
			temps: _dropS
		})
	}



	return (
		<_Create>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					newCan(state);
				}}
			>
				<div
					className="img"
					style={{
						background: state.picture.length ? `url(${state.picture})` : '',
						backgroundPosition: 'center',
						WebkitBackgroundSize: 'cover'
					}}
				>
					<img src={state.picture} alt="" required />
				</div>
				<div className="desc">
					<label>
						<input
							id="name"
							type="text"
							onChange={handlerChange}
							placeholder="Nombre de la raza..."
							name="name"
							value={state.name}
							required
							minLength="3"
						/>
					</label>
					<div className="body">
						<div className="temps" >
                            <select name="temps" id="" onChange={handlerChange} required>
                                <option value="" disabled selected>Seleccione un temperamento</option>
                                {
                                    temps.map((e)=><option key="e.name" value={e.name}>{e.name}</option>)
                                }
                            </select>
                            <div className="temp">
                                {
                                    state.temps.map((e)=><p key={e} onClick={dropTemp}>{e}</p>)
                                }
                            </div>
                        </div>
						<div className="form">
							<label>
								<input
									type="text"
									onChange={handlerChange}
									name="picture"
									placeholder="Link de la imagen..."
									value={state.picture}
									required
									pattern="(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))"
								/>
							</label>
							<label>
								<input
									type="number"
									onChange={handlerChange}
									name="minHeight"
									placeholder="Altura minima..."
									value={state.minHeight}
									required
									maxLength="2"
									minLength="1"
								/>
							</label>
							<label>
								<input
									type="number"
									onChange={handlerChange}
									name="maxHeight"
									placeholder="Altura maxima..."
									value={state.maxHeight}
									required
									maxLength="2"
									minLength="1"
								/>
							</label>
							<label>
								<input
									type="number"
									onChange={handlerChange}
									name="minWeight"
									placeholder="Peso Minimo"
									value={state.minWeight}
									required
									maxLength="2"
									minLength="1"
								/>
							</label>
							<label>
								<input
									type="number"
									onChange={handlerChange}
									name="maxWeight"
									placeholder="Peso maximo..."
									value={state.maxWeight}
									required
									maxLength="2"
									minLength="1"
								/>
							</label>
							<label>
								<input
									type="number"
									onChange={handlerChange}
									name="yearsOfLife"
									placeholder="Años de vida ..."
									value={state.yearsOfLife}
									required
									maxLength="2"
									minLength="1"
								/>
							</label>
						</div>
					</div>
					<button type="submit">Crear</button>
				</div>
			</form>
		</_Create>
	);
};

const mapStateToProps = ({ temps }) => ({ temps });

export default connect(mapStateToProps, { getTemps })(CreateCan);
