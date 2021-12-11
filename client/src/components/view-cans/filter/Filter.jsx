import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getTemps, filterBy, activePage } from '../../../redux/actions/actions';
import { _Filter } from '../../../stl-cmp';

const Filter = ({ temps, filterBy, getTemps, activePage }) => {
	useEffect(
		() => {
			(async function() {
				return await getTemps();
			})();
		},
		[ getTemps ]
	);

	const [ temperamentos, setTemps ] = useState([]);

	const filterCans = ({ target: { value } }, valor = null) => {
		filterBy(value);
		activePage(0);
		if (valor) {
			setTemps([ ...temperamentos, value ]);
		}
	};
	const cleaner = () => {
		filterBy('CLEAN');
		document.getElementById('finder').value = '';
		document.getElementById('disabled').selected = true;
		document.querySelectorAll('.radios').forEach((e) => (e.checked = false));
		setTemps([]);
	};
	return (
		<_Filter>
			<div class="card">
				<div class="rating-container">
					<div class="rating">
						<form class="rating-form">
							<label for="super-happy" title='filtrar por Api'>
								<input
									type="radio"
									name="rating"
									className="super-happy radios"
									deco="super-happy"
									id="super-happy"
									onChange={filterCans}
									value="API_DOGS"
								/>
								<svg
									version="1.1"
									id="Artwork"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									x="0px"
									y="0px"
									viewBox="0 0 512 512"
									enable-background="new 0 0 512 512"
									xmlSpace="preserve"
								>
									<g>
										<path d="M397.4,259.4c-56.8,0-103.1,46.2-103.1,103.1s46.2,103.1,103.1,103.1c56.8,0,103.1-46.2,103.1-103.1   S454.2,259.4,397.4,259.4z M397.4,441c-43.3,0-78.6-35.3-78.6-78.6s35.3-78.6,78.6-78.6c43.3,0,78.6,35.3,78.6,78.6   S440.7,441,397.4,441z" />
										<path d="M436,350.2h-51.1l7.1-7.8c4.6-5,4.2-12.7-0.8-17.3c-5-4.6-12.7-4.2-17.3,0.8l-25.8,28.3c-4.3,4.7-4.3,11.8,0,16.5   l25.8,28.3c2.4,2.7,5.7,4,9.1,4c2.9,0,5.9-1.1,8.3-3.2c5-4.6,5.4-12.3,0.8-17.3l-7.1-7.8H436c6.8,0,12.3-5.5,12.3-12.3   S442.8,350.2,436,350.2z" />
										<path d="M350,46.5h-270c-37.7,0-68.4,30.7-68.4,68.4v1c0,23.3,11.7,43.9,29.6,56.2c-17.8,12.5-29.6,33.2-29.6,56.8   c0,23.4,11.8,44,29.6,56.4c-17.9,12.5-29.6,33.2-29.6,56.9c0,37.9,30.8,68.7,68.7,68.7h184.6c6.8,0,12.3-5.5,12.3-12.3   c0-6.8-5.5-12.3-12.3-12.3H80.2c-24.4,0-44.2-19.8-44.2-44.6c0-24.4,19.8-44.2,44.2-44.2h205.3c6.8,0,12.3-5.5,12.3-12.3   s-5.5-12.3-12.3-12.3H80.2c-24.4,0-44.2-19.8-44.2-44.6c0-24.4,19.8-44.2,44.2-44.2h269.5c24.4,0,44.2,19.8,44.2,44.6   c0,6.8,5.5,12,12.3,12s12.3-5.7,12.3-12.5c0-23.3-11.7-43.9-29.5-56.3c17.8-12.4,29.5-32.9,29.5-56.2v-1   C418.4,77.2,387.7,46.5,350,46.5z M393.9,115.9c0,24.2-19.7,43.9-43.9,43.9h-0.3H80.2h-0.3c-24.2,0-43.9-19.7-43.9-43.9v-1   C36,90.7,55.7,71,79.9,71h270c24.2,0,43.9,19.7,43.9,43.9V115.9z" />
										<path d="M325.3,103.1H211c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h114.4c6.8,0,12.3-5.5,12.3-12.3S332.1,103.1,325.3,103.1z" />
										<circle cx="117.5" cy="115.4" r="13" />
										<path d="M337.6,228.7c0-6.8-5.5-12.3-12.3-12.3H211c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h114.4   C332.1,240.9,337.6,235.4,337.6,228.7z" />
										<circle cx="117.5" cy="228.7" r="13" />
										<path d="M211,329.7c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h51.8c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H211z" />
										<circle cx="117.5" cy="342" r="13" />
									</g>
								</svg>
							</label>

							<label for="neutral" title='filtrar por Database'>
								<input
									type="radio"
									name="rating"
									onChange={filterCans}
									className="neutral radios"
									deco="neutral"
									id="neutral"
									value="MY_CANS"
								/>
								<svg
									version="1.1"
									className="user"
									id="Capa_1"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									x="0px"
									y="0px"
									viewBox="0 0 489 489"
									xmlSpace="preserve"
								>
									<g>
										<g>
											<path d="M417.4,71.6C371.2,25.4,309.8,0,244.5,0S117.8,25.4,71.6,71.6S0,179.2,0,244.5s25.4,126.7,71.6,172.9S179.2,489,244.5,489    s126.7-25.4,172.9-71.6S489,309.8,489,244.5S463.6,117.8,417.4,71.6z M244.5,462C124.6,462,27,364.4,27,244.5S124.6,27,244.5,27    S462,124.6,462,244.5S364.4,462,244.5,462z" />
											<path d="M244.5,203.2c35.1,0,63.6-28.6,63.6-63.6s-28.5-63.7-63.6-63.7s-63.6,28.6-63.6,63.6S209.4,203.2,244.5,203.2z     M244.5,102.9c20.2,0,36.6,16.4,36.6,36.6s-16.4,36.6-36.6,36.6s-36.6-16.4-36.6-36.6S224.3,102.9,244.5,102.9z" />
											<path d="M340.9,280.5c-22.3-32.8-54.7-49.5-96.4-49.5s-74.1,16.6-96.4,49.5c-16.6,24.4-27.2,57.7-31.4,98.7    c-0.8,7.4,4.6,14.1,12,14.8c7.4,0.8,14.1-4.6,14.8-12c8.5-82.3,42.5-124,101-124s92.5,41.7,101,124c0.7,6.9,6.6,12.1,13.4,12.1    c0.5,0,0.9,0,1.4-0.1c7.4-0.8,12.8-7.4,12-14.8C368.1,338.1,357.5,304.9,340.9,280.5z" />
										</g>
									</g>
								</svg>
							</label>
						</form>
					</div>
				</div>
			</div>
			<div className="select">
				<select
					name=""
					id=""
					onChange={(e) => {
						filterCans(e, true);
					}}
				>
					<option id="disabled" value="" selected disabled>
						Filtrar por temperamento...
					</option>
					{temps.map((temp, i) => {
						return (
							<option key={i.toString()} value={temp.name}>
								{temp.name}
							</option>
						);
					})}
				</select>
				<div className='temps_'>{temperamentos.map((e) => <p>{e}</p>)}</div>
			</div>
			<button onClick={cleaner} title='Limpiar filtros'>
				<svg
					version="1.1"
					id="Capa_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 19.497 19.497"
					xmlSpace="preserve"
				>
					<g>
						<path d="M11.25,0L5.71,5.541L5.174,6.076L3.083,8.167l0.029,0.03C2.867,8.619,2.921,9.169,3.283,9.531   c0,0,0.902,1.684,1.845,2.627c0.942,0.941-1.96,1.578-3.104,2.723c-1.66,1.66-2.533,3.479-1.71,4.301   c0.824,0.824,2.641-0.049,4.301-1.709c1.145-1.145,1.841-3.986,2.708-3.121c0.867,0.867,2.627,1.846,2.627,1.846   c0.362,0.361,0.912,0.416,1.334,0.17l0.046,0.047l2.091-2.092l0.536-0.535l5.54-5.541L11.25,0z M10.2,1.812   c-0.028,0.029-0.058,0.058-0.049,0.042L10.2,1.812z M11.315,15.565L3.933,8.182l1.673-1.673l7.383,7.383L11.315,15.565z    M17.598,8.26c-0.197-0.016-1.479-0.128-2.06,0.003c-1.178,0.265-1.691,0.256-1.98-1.541c-0.288-1.797-1.004-1.311-2.841-0.419   c-2.593,1.258-2.245-2.019-0.483-4.521l0.112-0.096l0.904-0.903l7.464,7.464l-0.272,0.272C18.442,8.52,17.795,8.275,17.598,8.26z" />{' '}
						// style="fill:#030104;"
					</g>
				</svg>
			</button>
		</_Filter>
	);
};

const mapStateToProps = ({ temps }) => ({ temps });

export default connect(mapStateToProps, { filterBy, getTemps, activePage })(Filter);
