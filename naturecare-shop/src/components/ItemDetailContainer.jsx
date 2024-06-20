// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const productsMock = {
  Cerdos: [
    { id: '1', name: 'Lechones', description: 'Recomendaciones de uso Alimento para cerdos en etapa inicial para porcicultura estándar que estén entre los12 kg y los 25 kg de peso vivo.', image: '/images/lechones40k.png', category: 'Cerdos', price: 20.99 },
    { id: '2', name: 'Desarrollo', description: 'Recomendaciones de uso Alimento para cerdos en etapa de desarrollo para porcicultura estándar que estén entre los 25 kg y los 60 kg de peso vivo.', image: '/images/granjaCerdosDesarrollo.png', category: 'Cerdos', price: 25.99 },
    { id: '3', name: 'Finalizador', description: 'Recomendaciones de uso Alimento para cerdos en etapa de finalización para porcicultura estándar que estén entre los 60 kg y los 100 kg de peso vivo.', image: '/images/granja-cerdos-finalizador.png', category: 'Cerdos', price: 30.99 },
    { id: '4', name: 'Gestacion', description: 'Para usarse durante la gestación y hasta el destete Alimento de etapa de Gestación y Lactancia con buena palatabilidad que garantiza el consumo para soportar el desarrollo intrauterino de la camada manteniendo la condición corporal y la posterior producción láctea para el buen desarrollo inicial de los lechones.', image: '/images/gestacion-800.png', category: 'Cerdos', price: 35.99 },
  ],
  Aves: [
    { id: '5', name: 'Pollito iniciacion', description: 'Alimento completo para pollitas de postura, ofrezca el alimento desde el nacimiento hasta la sexta semana de edad.', image: '/images/Pollita iniciacion.jpeg', category: 'Aves', price: 15.99 },
    { id: '6', name: 'Pollito desarrollo', description: 'Alimento completo para el desarrollo de pollitas de postura, ofrezca el alimento desde la semana 15 de edad y hasta el inicio de la postura.', image: '/images/pollita desarrollo.jpeg', category: 'Aves', price: 18.99 },
    { id: '7', name: 'Gallinaa de postura', description: 'Alimento completo para gallinas de postura, ofrezca este alimento desde la semana 20 de edad y durante todo el ciclo de reproducción.', image: '/images/gallinadepostura.jpeg', category: 'Aves', price: 22.99 },
    { id: '8', name: 'Codornices de postura ', description: 'Alimento completo para ofrecer a codornices destinadas a la producción de huevo o reproductoras desde el inicio de la postura y durante todo el ciclo de producción.', image: '/images/codornizdepostura.jpeg', category: 'Aves', price: 19.99 },
  ],
};

function ItemDetailContainer({ addToCart }) {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    for (const category in productsMock) {
      const foundItem = productsMock[category].find(product => product.id === id);
      if (foundItem) {
        setItem(foundItem);
        break;
      }
    }
  }, [id]);

  const handleAddToCart = () => {
    if (item) {
      addToCart(item);
      alert(`${item.name} fue añadido al carrito.`);
    }
  };

  if (!item) return <p>Loading...</p>;

  return (
    <div className="container mt-5 pt-3">
      <div className="row">
        <div className="col-md-6">
          <img src={item.image} className="img-fluid" alt={item.name} />
        </div>
        <div className="col-md-6">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Precio: ${item.price}</p> {/* Mostrar el precio del artículo */}
          <button className="btn btn-primary" onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
