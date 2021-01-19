import './footer.css'
import map from '../../assets/maps.jpg'
import instagram from '../../assets/instagram-brands (1) 1.png'
import facebook from '../../assets/facebook-square-brands 1.png'
import whatsapp from '../../assets/whatsapp-square-brands 1.png'


const Footer = () => {
	return (
		<footer className="App-Footer">
			<div className="mapa">
				<img src={map} alt=""/>
			</div>

			<div className="endereco">
				<p>LOVT - You love, your loft!</p>
				<p>Broad St, Newark, NJ 07102 - USA</p>
				<p>+1 (973) 854-555-548</p>
				<p>contact@lovtrealstate.com</p>
				<p>OUR SOCIAL MEDIAS:</p>
				<div className="logos">
					<img className='logos-img' src={instagram} alt=""/>
					<img className='logos-img' src={facebook} alt=""/>
					<img className='logos-img' src={whatsapp} alt=""/>
				</div>
			</div>
		</footer>
	)
}

export default Footer