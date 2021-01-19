import './header.css'
import img from '../../assets/menuHamburguer.jpg'

const Header = () => {
	return (
		<header className="App-header">

			<div className="Logo">
				<h1 className='Titulo'>LOVT</h1>
					<div className="FullSlogan">
						<p className='slogan'>You Love, </p>
						<p className='slogan'>your loft!</p>
					</div>
			</div>

			<img className='menu' src={img} alt=""/>
		</header>
	)
}

export default Header