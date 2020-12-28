/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import area from "../../../Images/HomeWhatWeProvide/area.jpeg";
import cooler from "../../../Images/HomeWhatWeProvide/cooler.jpeg";
import floor from "../../../Images/HomeWhatWeProvide/floor.jpeg";
import crossfit from "../../../Images/HomeWhatWeProvide/crossfit.jpeg";
import sound from "../../../Images/HomeWhatWeProvide/sound.jpeg";
import equip from "../../../Images/HomeWhatWeProvide/equip.jpeg";
import SvgArea from "../Icons/SvgArea";
import SvgAirConditioning from "../Icons/SvgAirConditioning";
import SvgSound from "../Icons/SvgSound";

const svgStyle = css`
	width: 3em;
	padding: 0.2rem;
	fill: blue;
`;

export const features = [
	{
		id: 0,
		src: area,
		title: "5000 sq feet area",
		children: <SvgArea css={svgStyle} />,
		desc: "we provide most open and wide area",
	},
	{
		id: 1,
		src: cooler,
		title: "proper ventillation",
		children: <SvgAirConditioning css={svgStyle} />,
		desc: "2 big coolers which let you chill in hot conditions",
	},
	{
		id: 2,
		src: sound,
		title: "music system",
		children: <SvgSound css={svgStyle} />,
		desc: "enjoy music with full bass",
	},
	{
		id: 3,
		src: crossfit,
		title: "cross fit",
		children: <SvgArea css={svgStyle} />,
		desc: "one of the best cross-fit available in other gyms",
	},
	{
		id: 4,
		src: equip,
		title: "steam shower",
		children: <SvgAirConditioning css={svgStyle} />,
		desc: "get prepared for steam shower to refresh",
	},
	{
		id: 5,
		src: floor,
		title: "gym flooring",
		children: <SvgSound css={svgStyle} />,
		desc: "a floor that provide grip of intense level",
	},
];
