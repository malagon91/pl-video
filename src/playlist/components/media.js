import React from 'react';
import PropTypes from 'prop-types';
import './media.css';
//Pure component no se re-renderiza si recibe los mismos props

class Media extends React.Component{
	//nueva forma de declarar en ecma 7
	state= {
		autState: "first"
	}
	constructor(props){
		super(props);
		/*this.state = {
			wheatever: "textedit"
		}*/ //declaracion del state en ecma 6
//		this.handleClick = this.handleClick.bind(this); // Cambio el contexto
	}
	// el arrowFunction reemplaza el bind en el constructor
    handleClick =(target) =>{
    	console.log(this.props.title);
	}
	render(){
		return (
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img className="Media-image"
					src={this.props.cover}
					alt=""
					width={240}
					height={160}
					/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
		)
	}
}
Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string,
	//type: PropTypes.oneOf(['video','audio']) Valida que llegue uno de los que espera
}

// se enlaza manualmente porque el evento se ejecuta en el dom no en la clase
// un ArrowFunction siempre heredan el contexto de su padre con eso se
//sustituye y no se usa el bind(this)
export default Media;

/*
lifeclicle component
mount
constructor llamado antes de que el componente sea montado
componentWillMount se llama antes de que el componente se vaya a montar
render todos los elementos a renderizar
componentDidMount se ejecuta luego de que el component ya esta en pantalla
componentWillREcieveProps  se ejecuta cuando el component recibe props
shuuldComponentUpdate condiciona si el component debe volver a renderiar
render re-render
componentDidUpdate el componente se re-reenderizo
Desmontado unmount
componentWillUnmount antes de que el componente sea retirado de pantalla
errors handler react 16 o superior
componentDidCatch ocurre si salio un error al renderizar

un functional component solo sirve para el UI es una funcion que returna una vista

 */