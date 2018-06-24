import React from 'react'
import Media from './media';
import './playlist.css';

function Playlist(props) {
        const playlist = props.playlist;
        console.log(playlist);
        return(
            <div className="Playlist">
                {
                    playlist.map((item) => {
                        return <Media
                            key={item.id}
                            {... item}
                        />
                    })
                }
            </div>
        )
}
/*
El spreed operator envia un prop por cada data en item
{... item}
vuelvo el componente a funcional solo necesito hacerlo en una funcion
y solo devuelve una una lista
un pure component se declara extendiendo de PureComponent
y no se renderiza si recibe los mismos props

 */
export default Playlist;