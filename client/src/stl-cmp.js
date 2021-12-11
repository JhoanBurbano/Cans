import styled from 'styled-components';
import canSleeped from './img/can-sleeped.jpg';
import Pattern from './img/pattern.jpg';

const b_s = '0 0 2rem #0002';
const b_s_hard = '0 0 2rem #0004';
const brown_ = '#b63';
const brown_Dark = '#940';
const gray_ = '#666';
const red_ = '#f66';
const blue_ = '#61ffff';
const landing_ =
	'https://img.freepik.com/foto-gratis/fondo-textura-pared-ladrillo-blanco-moderno_35257-348.jpg?size=626&ext=jpg';
const square_ = 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX21623529.jpg';
const noImg = 'https://elpapayasaurio.files.wordpress.com/2012/07/227150374924977131_fkac8rox_f.jpg';
// 'https://images.vexels.com/media/users/3/144928/isolated/preview/ebbccaf76f41f7d83e45a42974cfcd87-dog-illustration.png';

export const _Navbar = styled.nav`
	height: 6rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 1.5rem;
	background: #b63;
	background: url(${Pattern});
	background-size: contain;
	background-position: center;
	box-shadow: 0 0 1rem #1114;
	& .logo {
		width: 20%;
		display: flex;
		justify-content: center;
		& .logo {
			text-decoration: none;
			transform: translateY(15%);
			font-size: 4rem;
			font-family: 'Dyuthi';
			position: relative;
			color: #fa7;
			&::after {
				content: 'o o';
				position: absolute;
				top: -10%;
				left: 25%;
				font-size: 2rem;
			}
			&::before {
				content: 'o';
				position: absolute;
				top: -20%;
				left: 40%;
				font-size: 2rem;
			}
		}
	}
	& .links {
		width: 40%;
		display: flex;
		justify-content: space-evenly;
		font-size: 1.5rem;
		& > * {
			text-decoration: none;
			color: white;
			&.active {
				color: white;
				font-weight: bold;
			}
		}
	}
`;

export const _Landing = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(to top, #000, #333);
	background: url(${canSleeped});
	background-position: 55% 55%;
	background-size: 59%;
	background-repeat: repeat;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: end;
	overflow: hidden;
	&::after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: brightness(1.3) contrast(1.15);
		background: linear-gradient(to right, #101010 18%, #0000 30%, #0000 70%, #101010 82%);
	}
	&::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		/* backdrop-filter: brightness(1.5); */
		background: radial-gradient(65rem, #0000 50%, #121213aa 65%);
	}

	& .Container {
		z-index: 1;
		height: 100%;
		width: 85%;
		/* border: 1px solid #b63; */
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: .5rem;
		color: ${brown_};
		font-size: 1.4rem;
		& .top {
			height: 8%;
			/* border: 1px solid #b63; */
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 .5rem;
			& .logo {
				text-decoration: none;
				color: ${brown_};
				font-size: 4rem;
				font-family: 'Dyuthi';
				position: relative;
				&::after {
					content: 'o o';
					position: absolute;
					top: -10%;
					left: 25%;
					font-size: 2rem;
				}
				&::before {
					content: 'o';
					position: absolute;
					top: -20%;
					left: 38%;
					font-size: 2rem;
				}
			}
			& .things {
				width: 15%;
				display: flex;
				justify-content: space-evenly;

				& > *{
				text-decoration: none;
				color: ${brown_};
				}
			}
		}
		& .asides {
			height: 85%;
			display: flex;
			justify-content: space-between;
			& > div {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				width: 5%;
				height: 100%;
				/* border: 1px solid #b63; */
				& .store {
					height: 15%;
					writing-mode: vertical-lr;
					text-align: center;
				}
				& .lines {
					height: 15%;
					writing-mode: vertical-lr;
					text-align: center;
					font-size: 3rem;
					letter-spacing: -1rem;
				}
				& .underlined {
					height: 45%;
					writing-mode: vertical-lr;
					text-align: center;
					text-decoration: underline;
					color: white;
					& b {
						padding: 4px;
						border-left: 1px solid white;
					}
				}
				& .dotted {
					height: 45%;
					writing-mode: vertical-lr;
					text-align: center;
					letter-spacing: 1rem;
				}
				& .buttons {
					width: 100%;
					height: 10%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					& button {
						background: #ddd;
						width: 4rem;
						height: 4rem;
						border-radius: 50%;
						border: none;
						cursor: pointer;
						position: relative;
						&.play {
							clip-path: polygon(0 0, 0 100%, 100% 50%);
							border-radius: 0;
							width: 3rem;
							height: 3rem;
						}
						&:hover {
							filter: brightness(.7);
						}
						&:active {
							filter: brightness(1.4);
						}
						& object {
							width: 2rem;
						}
						& .link {
							position: absolute;
							width: 100%;
							height: 100%;
							top: 0;
							left: 0;
							opacity: 0;
						}

						& *:hover {
							cursor: pointer;
						}
					}
				}
				& .form {
					height: 20%;
					width: 100%;
					/* background: black; */
					display: flex;
					flex-direction: column;
					justify-content: end;
					align-items: end;
					& p.t {
						width: 200%;
						font-size: 1.8rem;
						font-weight: bold;
					}
					& p.b {
						width: 450%;
						font-size: 2.2rem;
						font-weight: bold;
					}
					&.i {
						align-items: start;
						height: 25%;
						justify-content: space-around;
					}
					& p.m {
						width: 200%;
						font-size: 1.5rem;
					}
					& div.js {
						width: 360%;
						background: ${brown_};
						color: #000;
						font-size: 2.2rem;
						border-radius: .5rem;
					}
					& img {
						height: 50%;
						border-radius: 1rem;
					}
				}
			}
			/* & .left {
				width: 5%;
				height: 100%;
				border: 1px solid #b63;
			}
			& .right {
				width: 5%;
				height: 100%;
				border: 1px solid #b63;
			} */
		}
	}
`;

export const _App = styled.div`
	padding: 2rem;
	background: #f6f6f6;
	& > * {
		margin-bottom: 2rem;
	}
`;

export const _Component = styled.div`
	padding: 1.5rem;
	background: white;
	background: url(${landing_});
	/* background-size: constain; */
	background-position: center;
	border-radius: 1.5rem;
	box-shadow: ${b_s};
`;

export const _ViewCans = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 1.3rem;
	& div.Views {
		margin-bottom: 2rem;
		padding: 2rem;
		width: 90%;
		display: flex;
		justify-content: space-evenly;
		/* flex-direction: column; */
		flex-wrap: wrap;
		backdrop-filter: blur(.25rem) brightness(.9);
		border: 2px solid #fffa;
		box-shadow: ${b_s_hard};
		border-radius: 2rem;
	}
`;
export const _Card = styled.div`
	width: 30rem;
	/* height:32rem; */
	background: white;
	overflow: hidden;
	border-radius: 1rem;
	margin: 2rem;
	font-size: 1.3rem;
	box-shadow: ${b_s};

	& .img {
		height: 18rem;
		overflow: hidden;
		position: relative;
		display: flex;
		justify-content: flex-end;
		& .buttons {
			width: 10%;
			height: 15%;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			position: absolute;
			text-shadow: ${b_s};
			cursor: pointer;
			& button {
				border: none;
				background: transparent;
				color: white;
				& > * {
					text-decoration: none;
					color: #333;
					font-size: 1.8rem;
					cursor: pointer;
					filter: brightness(.8);
					&:hover {
						filter: brightness(1.3);
					}
				}
				& p {
					font-size: 1.5rem;
				}
			}
		}
		& img {
			width: 100%;
		}
		margin-bottom: 0;
	}
	& .desc {
		padding: 1rem 1rem;
		& > * {
			margin-bottom: .5rem;
		}
		& h3 {
			font-size: 1.8rem;
			& > * {
				text-decoration: none;
				color: ${brown_Dark};
				&:hover {
					filter: brightness(.7);
				}
			}
		}
		& .height {
			display: flex;
			font-weight: bold;
			& > p {
				width: 5rem;
			}
			& > div {
				font-weight: normal;
				margin-left: .5em;
			}
		}
		& .temps {
			word-wrap: break-word;
			line-height: 180%;
			/* margin-bottom: 0; */
			/* display: flex;
            flex-direction: column; */
			& p {
				font-weight: bold;
				line-height: 100%;
			}
			& b {
				display: inline-block;
				padding: .09rem .5rem;
				margin: 0.25rem .25rem 0 0;
				background: ${brown_};
				border-radius: .5rem;
			}
		}
	}
`;
export const _Pagination = styled.div`
	background: ${brown_};
	background: url(${Pattern});
	background-size: 11%;
	box-shadow: ${b_s_hard};
	border-radius: 1rem;
	& button {
		border: none;
		background: #ff6;
		padding: .5rem;
		margin: 1rem;
		border-radius: .5rem;
		cursor: pointer;
		&.active {
			font-weight: bold;
			background: #ff3;
		}
	}
`;
export const _Can = styled.div`
	width: 90%;
	height: 74vh;
	margin: 0 auto;
	overflow: hidden;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 2rem;
	box-shadow: ${b_s_hard};
	font-size: 1.8rem;
	backdrop-filter: blur(.25rem) brightness(.9);
	border: 2px solid #fff4;
	& .img {
		overflow: hidden;
		height: 100%;
		width: 40%;
		display: flex;
		justify-content: center;
		& img {
			height: 100%;
		}
	}
	& .desc {
		width: 60%;
		height: 100%;
		padding: 3rem 3rem;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		& > * {
			margin-bottom: .5rem;
		}
		& h3 {
			font-size: 3.8rem;
			text-align: center;
			& > * {
				text-decoration: none;
				color: ${brown_Dark};
				&:hover {
					filter: brightness(.7);
				}
			}
		}
		& .height {
			display: flex;
			font-weight: bold;
			& > p {
				width: 10rem;
			}
			& > div {
				font-weight: normal;
				margin-left: .5em;
			}
		}
		& .temps {
			word-wrap: break-word;
			line-height: 180%;
			& p {
				font-weight: bold;
				line-height: 100%;
			}
			& b {
				display: inline-block;
				padding: .09rem .5rem;
				margin: 1rem 1rem 0 0;
				background: ${brown_};
				border-radius: .5rem;
			}
		}
	}
`;
export const _Finder = styled.div`
	font-size: 1.3rem;
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${square_});
	background-size: 20%;
	padding: 1rem;
	border-radius: 1rem;
	margin-bottom: 2rem;
	& div.blur {
		width: 97%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		backdrop-filter: blur(.5rem) contrast(.8);
		padding: 1rem 2rem;
		border-radius: 1rem;
		& form {
			width: 35%;
			& label {
				display: flex;
				flex-direction: column;
				& p {
					font-weight: bold;
					padding: .5rem;
					color: #000;
					font-size: 1.5rem;
				}
				& div {
					width: 100%;
					position: relative;
					& input {
						width: 100%;
							background-color: rgba(0, 0, 16, 0.8);
							border: none;
							padding: 1.3rem;
							border-radius: 1rem;
							color: white;

						/* width: 100%;
						height: 2.5rem;
						border-radius: .5rem;
						outline: none;
						border: 1.8px solid white;
						padding: .5rem;
						background: #fff2;
						color: black;
						filter: contrast(1.1);
						&:focus {
							border-style: solid;
						} */
					}
					& button {
						background: transparent;
						border: none;
						position: absolute;
						right: 0.25rem;
						top: .3rem;
						font-size: 3rem ;
						cursor: pointer;
					}
				}
			}
		}
	}
`;
export const _Filter = styled.div`
	width: 60%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.2rem;
	letter-spacing: .1rem;
	& .select {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		& select {
			background-color: rgba(0, 0, 16, 0.8);
			border: none;
			padding: 1.3rem;
			border-radius: 1rem;
			color: white;
			& option {
				line-height: 300%;
			}
		}
		& .temps_ {
			width: 100%;
			& p {
				line-height: 180%;
				display: inline;
				word-wrap: break-word;
				padding: .25rem;
				margin: .15rem;
				background: ${blue_};
				border-radius: .5rem;
			}
		}
	}
	& button {
		width: 15%;
		border: none;
		background: none;
		& svg {
			background-color: rgba(0, 0, 16, 0.8);
			padding: .5rem;
			border-radius: 1rem;
			width: 45%;
			fill: white;
			transform: rotate(-180deg);
			cursor: pointer;
			&:hover {
				fill: ${red_};
			}
			&:active {
				filter: brightness(1.4);
			}
		}
	}
	& .card {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		margin: auto;
		padding: 0.8rem;
		width: 30%rem;

		.rating-container {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
			padding: 0.4rem 0.8rem;
			width: 100%;
			display: flex;
			flex-direction: column;
		}

		.rating-text p {
			color: rgba(0, 0, 16, 1);
			font-size: 1.3rem;
			padding: 0.3rem;
			font-weight: bold;
		}

		.rating {
			background-color: rgba(0, 0, 16, 0.8);
			padding: 0.4rem 0.4rem 0.1rem 0.4rem;
			border-radius: 1rem;
		}

		.rating-form {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		svg {
			fill: rgb(242, 242, 242);
			/* width: 33%; */
			height: 3.6rem;
			width: 3.6rem;
			margin: 0.2rem;
			&.user {
				transform: scale(.9);
			}
		}

		#radios label {
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		input[type="radio"] {
			position: absolute;
			opacity: 0;
		}

		input[type="radio"] + svg {
			-webkit-transition: all 0.2s;
			transition: all 0.2s;
		}

		input + svg {
			cursor: pointer;
		}

		input[deco="super-happy"]:hover + svg,
		input[deco="super-happy"]:checked + svg,
		input[deco="super-happy"]:focus + svg {
			fill: rgb(0, 109, 217);
		}

		input[deco="happy"]:hover + svg,
		input[deco="happy"]:checked + svg,
		input[deco="happy"]:focus + svg {
			fill: rgb(0, 204, 79);
		}

		input[deco="neutral"]:hover + svg,
		input[deco="neutral"]:checked + svg,
		input[deco="neutral"]:focus + svg {
			fill: rgb(232, 214, 0);
		}

		input[deco="sad"]:hover + svg,
		input[deco="sad"]:checked + svg,
		input[deco="sad"]:focus + svg {
			fill: rgb(229, 132, 0);
		}

		input[deco="super-sad"]:hover + svg,
		input[deco="super-sad"]:checked + svg,
		input[deco="super-sad"]:focus + svg {
			fill: rgb(239, 42, 16);
		}

		/* @media screen and (max-width: 650px) and (max-height: 700px) {
	body,
	html {
		font-size: 0.7rem;
	}
	header h1 {
		font-size: 4em;
	}
	footer p {
		font-size: 2em;
	}
}

@media screen and (max-height: 700px) {
	body,
	html {
		font-size: 0.7rem;
	}
	header h1 {
		font-size: 4em;
	}
	footer p {
		font-size: 2em;
	}
}

@media screen and (max-width: 650px) {
	body,
	html {
		font-size: 0.7rem;
	}
	header h1 {
		font-size: 4em;
	}
	footer p {
		font-size: 2em;
	}
}

@media screen and (max-width: 450px) and (max-height: 550px) {
	body,
	html {
		font-size: 0.6rem;
	}
	header h1 {
		font-size: 4.6em;
	}
	footer p {
		font-size: 3em;
	}
}

@media screen and (max-height: 550px) {
	body,
	html {
		font-size: 0.6rem;
	}
	header h1 {
		font-size: 4.6em;
	}
	footer p {
		font-size: 3em;
	}
}

@media screen and (max-width: 450px) {
	body,
	html {
		font-size: 0.6rem;
	}
	header h1 {
		font-size: 4.6em;
	}
	footer p {
		font-size: 3em;
	}
}

@media screen and (max-width: 400px) and (max-height: 500px) {
	body,
	html {
		height: 500px;
		width: 400px;
	}
}

@media screen and (max-height: 500px) {
	body,
	html {
		height: 500px;
	}
}

@media screen and (max-width: 400px) {
	body,
	html {
		width: 400px;
	}
} */
	}
`;
export const _Order = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
	& select {
		width: 80%;
		background-color: rgba(0, 0, 16, 0.8);
		border: none;
		padding: 1.3rem;
		border-radius: 1rem;
		color: white;
		& option {
			line-height: 300%;
		}
	}
`;
export const _Create = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 75vh;
	& form {
		backdrop-filter: blur(1.5rem);
		width: 95%;
		height: 75vh;
		display: flex;
		overflow: hidden;
		border-radius: 2rem;
		box-shadow: ${b_s_hard};
		& .img {
			overflow: hidden;
			width: 50%;
			display: flex;
			justify-content: center;
			background: url(${noImg});
			background-size: cover;
			& img {
				height: 110%;
				backdrop-filter: blur(2.rem);
			}
		}
		& .desc {
			padding: 2rem;
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;
			& label {
				display: flex;
				justify-content: end;
				align-items: center;
				width: 100%;
				& p {
					font-size: 1.3em;
				}
				& input {
					width: 50%;
					background-color: rgba(0, 0, 16, 0.7);
					border: none;
					padding: 1.3rem;
					border-radius: 1rem;
					color: white;
					&#name {
						width: 100%;
						text-align: center;
					}
				}
			}
			& .body {
				width: 100%;
				display: flex;
				justify-content: space-between;
				& .temps {
					width: 35%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: start;
					& select {
						width: 80%;height: 20%;
						background-color: rgba(0, 0, 16, 0.8);
						border: none;
						padding: 1.3rem;
						border-radius: 1rem;
						color: white;
						& option {
							line-height: 300%;
						}
					}
					& .temp{
						height: 80%;
						display: flex;
						flex-direction: column;
						& p{
							margin: .25rem;
							padding: .5rem;
							background: ${blue_};
							font-weight: bold;
							font-size: 1.3rem
						}
					}
				}
				& .form {
					width: 65%;
					& label {
						display: flex;
						justify-content: end;
						align-items: center;
						width: 100%;
						& p {
							font-size: 1.3em;
						}
						& input {
							width: 90%;
							background-color: rgba(0, 0, 16, 0.7);
							border: none;
							padding: 1.3rem;
							border-radius: 1rem;
							color: white;
						}
					}
				}
			}
			& button {
				padding: 1rem 0;
				border-radius: 1rem;
				width: 50%;
				border: none;
				margin: 0 auto;
				background-color: rgba(0, 0, 16, 0.8);
				color: white;
			}
		}
	}
`;
