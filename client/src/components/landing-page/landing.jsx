import React from 'react';
import { _Landing } from '../../stl-cmp';
import hueso from '../../img/dibujo.svg';
import { Link, NavLink } from 'react-router-dom';
// import {ReactComponent as hueso} from '../../img/dibujo.svg';

const LandingPage = () => {
	return (
		<_Landing>
			<div className="Container">
				<div className="top">
					<NavLink to="/app" className="logo">can</NavLink>
					<div className="things">
						<NavLink to="/app">contact</NavLink>
						<NavLink to="/app/about">about</NavLink>
					</div>
				</div>
				<div className="asides">
					<div className="left">
						<p className="lines">||</p>
						<p className="dotted">.<b>.</b>...</p>
						<div className="buttons">
							<button className="play"></button>
							<p className="Form" />
						</div>
                        <div className="form i">
                            <img src="https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-a.jpg?filter=w500" alt="" />
                            <p className="m">created by</p>
                            <div className="js">Burbano Studio</div>
                            </div>
					</div>
					<div className="right">
						<p className="store">store</p>
						<p className="underlined"><b><span>{'choose a dog'}</span></b></p>
						<div className="buttons">
							<button className="go">
                                <object data={hueso} type="image/svg+xml" style={{cursor:'pointer'}}></object>
								<Link className='link' to='app' >...</Link>
                            </button>
						</div>
							<div className="form">
                            <p className="t">Conoce a</p> 
							<p className="b">nuestros cachorros</p> 
                            </div>
					</div>
				</div>
			</div>
		</_Landing>
	);
};

export default LandingPage;
