
const squareStyle = {
	border: '2px solid green',
	background: 'lightgreen',
	fontSize: '150px',
	fontWeight: '800',
	float: 'left',
	cursor: 'pointer',
	padding: '0px',
	textAlign: 'center',
	height:'200px',
	width:'200px'
};

const Square = (props) => {
	return (
		<button  onClick={()=>props.openCard(props.card.id, props.card.img)} style={squareStyle}>

			{props.card.isOpen ? props.card.img : ''}


		</button>
	);
};
export default Square;