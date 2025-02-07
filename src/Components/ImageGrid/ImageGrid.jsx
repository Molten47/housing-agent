import React from 'react'
import './ImageGrid.css'
import image1 from '../../assets/johnson-johnson-U6Q6zVDgmSs-unsplash.jpg'
import image2 from '../../assets/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg'
import image3 from '../../assets/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg'
import image4 from '../../assets/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg'
const properties = [
    {
        id: 1,
        image: image1,
        location: "Pinnock Estate, Lagos.",
        price: "$1,200,000",
        rooms: 4,
        bath: 3,
        size: "2,500 sqft",
    },
    {
        id: 2,
        image: image2,
        location: "Alalubosa Estate, Ibadan.",
        price: "$1,200,000",
        rooms: 4,
        bath: 3,
        size: "2,500 sqft",
    },
    {
        id: 3,
        image: image3,
        location: "Rivers Estate, Lagos.",
        price: "$1,200,000",
        rooms: 4,
        bath: 3,
        size: "2,500 sqft",
    },
    {
        id: 4,
        image: image4,
        location: "Pinnock Estate, Lagos.",
        price: "$1,200,000",
        rooms: 4,
        bath: 3,
        size: "2,500 sqft",
    }

]
//const gridImage = [image1, image2,image3,image4]


const ImageGrid = () => {
  return (
    <div className='image-grid'>
     {properties.map((property)=>(
        <div key={property.id} className="image-item">
            <img src={property.image} alt={`Property ${property.id}`} />
            <div className="propety-details">
                <h2>{property.location}</h2>
                <p><strong>Price:</strong>{property.price}</p>
                <p><strong>Rooms:</strong>{property.rooms}</p>
                <p><strong>Bath:</strong>{property.bath}</p>
                <p><strong>Size:</strong>{property.size}</p>
            </div>
        </div>
     ))}
      
    </div>
  )
}

export default ImageGrid
