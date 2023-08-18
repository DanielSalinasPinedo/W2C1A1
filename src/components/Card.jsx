import React from 'react'

const Card = (props) => {
  const personajes = [
    { imagen: 'https://depor.com/resizer/oPf-2Xij6G_oA4sfJ7Y5DGDQYhM=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DAYT2F5NUNB7VPAFKUPHNDXVQA.jpg',
      title: 'Son Gokū', text: 'Gokū aterrizó en la Tierra, un anciano artista marcial de las montañas, llamado Son Gohan, encontró a Kakarotto cerca de un cráter formado en el suelo por la pequeña nave espacial en la que fue enviado y le puso un nuevo nombre, Gokū.'},
    { imagen: 'https://tierragamer.com/wp-content/uploads/2022/04/test-que-vegeta-eres.jpg', 
      title: 'Vegeta', text: 'Vegeta es presentado como el orgulloso príncipe de la raza Saiyajin (サイヤ人) y el primer villano importante de la serie Dragon Ball Z. Viaja a la Tierra con su compañero Nappa para usar las Dragón Balls y desear la inmortalidad.'},
    { imagen: 'https://www.mundodeportivo.com/alfabeta/hero/2018/10/153805.alfabetajuega-gohan-mistico-180616-4.jpg?width=1200&aspect_ratio=16:9', 
      title: 'Son Gohan', text: 'Es el primer hijo de Son Gokū y Chi-Chi, hermano mayor de Son Goten, esposo de Videl, con quien tiene una hija llamada Pan. Es mitad Saiyajin y mitad humano. En la saga de Cell tomó un rol importante ya que él terminó vencedor en la batalla con Cell.'},
    { imagen: 'https://peru21.pe/resizer/0OkAjE9go-io_hDOBsvjf1yxo14=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EORNH3X635G4TATLE45TJHH54A.jpg', 
      title: 'Bulma', text: 'Bulma encontraría una esfera del dragón guardada en su casa y otra en un valle; tras investigar descubriría una leyenda que señalaba que al reunir las siete un dios aparecería para conceder un deseo.'},
    { imagen: 'https://www.looper.com/img/gallery/the-untold-truth-of-piccolo/intro-1661962971.webp', 
      title: 'Piccolo', text: 'Decide formar equipo para derrotar amenazas más grandes. Adquiere gran importancia en la serie al convertirse en el maestro de artes marciales de Son Gohan, tras comprobar su enorme fuerza y potencial.'},
    { imagen: 'https://www.mundodeportivo.com/alfabeta/hero/2022/02/Dragon-ball-krillin-imagen.jpg?width=1200', 
      title: 'Krilin', text: 'El terrícola más poderoso en el manga, en el anime solo es superado por Uub en Dragon Ball GT, pero Krilin carece de cualquier origen sobrenatural, es así que ha desarrollado sus habilidades solo con su propio esfuerzo.'}
  ]

  return (
    <div className="container mt-4">
      <div className="row">
      {personajes.map((personaje, index) => (
        <div className='col-md-6 col-sm-6 mb-3 col-lg-4' key={index}>
          <div className="card shadow-lg zoom-on-hover">
          <img className='card-img-top' src={personaje.imagen} alt="" />
          <div className='card-body'>
              <div className="d-flex justify-content-between">
                <h4 className='card-title'>{personaje.title} </h4>
                <p className='count'>Contador: {props.count}</p>
              </div>
              <p className='card-text'>{personaje.text}</p>
              <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
      ))}  
    </div>
    </div>
  ) 
  
}

export default Card