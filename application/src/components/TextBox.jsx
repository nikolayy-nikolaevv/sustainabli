import SuperheroImage from "../assets/images/Superhero_Battery.svg"
import AntiheroImage from "../assets/images/Antihero_Battery.svg"

// boxType must be 'RightBox' or 'LeftBox'
export default function TextBox({ primaryColor, secondaryColor, titleColor, title, contentColor, boxType }) {
	const rightBoxContent = 'Lithium is an <a href="https://en.wikipedia.org/wiki/Alkali_metal" target=”_blank” style="color: #f96738;">alkali metal</a> with the atomic number three and one valence electron. It belongs to the light metals and has... Wait, wait, don\'t tune out, we promise it gets better. Granted, chemistry is boring to most people, but lithium is a superhero among chemical elements. You may not even realize it, but lithium plays a huge role in our everyday lives. Remote controls, medical devices and e-cars, almost all of them have lithium-ion batteries. But you’ll probably find the element in your personal hardware. Thanks to lithium, your cell phone battery is much more powerful than <a href="https://en.wikipedia.org/wiki/Nickel-Cadmium_battery" target=”_blank” style="color: #f96738;">a nickel-based battery</a>, and thanks to lithium, your laptop battery has a longer lifespan. So you could say that lithium will be essential for emerging and innovative inventions and will hopefully allow us to develop more sustainable technologies in the future. Long live lithium!';
	const leftBoxContent = 'You may be thinking to yourself that this is too good to be true, and unfortunately you\'re right, because like many superheroes, Lithium has a dark origin story. Unfortunately, lithium isn\'t as great as we\'ve made it out to be. For lack of a better word, lithium mining sucks in every way. Lithium is mined primarily in South America, because that\'s where so-called <a href="https://en.wikipedia.org/wiki/Salt_evaporation_pond" target=”_blank” style="color: #f96738;">salt pans</a> are located. In these salt pans, saline groundwater is extracted and collected in artificial basins. When the water has evaporated, a lithium-rich mixture remains. This lithium is then processed and ends up in your cell phone battery, for example. As the saltwater level drops due to mining, freshwater flows in, which in turn has a negative effect on the drinking water supply in the surrounding area. This is dangerous for local residents and animals living in the dried-up area. In addition, lithium mining destroys nature reserves and threatens endangered species. Yikes...';
	return (
		<div id={boxType === "RightBox" ? "lithium-superhero" : "dark-side-lithium"} className="TextBoxContainer Anchor">
			<div className={`${boxType} float-right`} style={{ backgroundColor: `${primaryColor}` }}>
				<div className="Ornament1" style={{ backgroundColor: `${secondaryColor}` }}></div>
				<div className="Ornament2" style={{ backgroundColor: `${secondaryColor}` }}></div>
				<div className="TextContainer">
					<div className="InfoTitle" style={{ color: `${titleColor}` }}>{title}</div>
					<div className="InfoText" style={{ color: `${contentColor}` }} dangerouslySetInnerHTML={{ __html: boxType === "RightBox" ? rightBoxContent : leftBoxContent }}></div>
				</div>
				<div className="Ornament3" style={{ backgroundColor: `${secondaryColor}` }}></div>
			</div>
			<div className={boxType === "RightBox" ? "RightTextImageContainer" : "LeftTextImageContainer"}>
				<img src={boxType === "RightBox" ? SuperheroImage : AntiheroImage} alt="Battery" className="TextBoxImage" />
			</div>
		</div>
	)
}