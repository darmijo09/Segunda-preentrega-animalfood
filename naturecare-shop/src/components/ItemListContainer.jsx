// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import Cart from './Cart';

const productsMock = {
  Cerdos: [
    { id: '1', name: 'Lechones', description: 'Recomendaciones de uso Alimento para cerdos en etapa inicial para porcicultura estándar que estén entre los12 kg y los 25 kg de peso vivo.', image: '/images/lechones40k.png', category: 'Cerdos' },
    { id: '2', name: 'Desarrollo', description: 'Recomendaciones de uso Alimento para cerdos en etapa de desarrollo para porcicultura estándar que estén entre los 25 kg y los 60 kg de peso vivo.', image: '/images/granjaCerdosDesarrollo.png', category: 'Cerdos' },
    { id: '3', name: 'Finalizador', description: 'Recomendaciones de uso Alimento para cerdos en etapa de finalización para porcicultura estándar que estén entre los 60 kg y los 100 kg de peso vivo.', image: '/images/granja-cerdos-finalizador.png', category: 'Cerdos' },
    { id: '4', name: 'Gestacion', description: 'Para usarse durante la gestación y hasta el destete Alimento de etapa de Gestación y Lactancia con buena palatabilidad que garantiza el consumo para soportar el desarrollo intrauterino de la camada manteniendo la condición corporal y la posterior producción láctea para el buen desarrollo inicial de los lechones.', image: '/images/gestacion-800.png', category: 'Cerdos' },
  ],
  Aves: [
    { id: '5', name: 'Pollito iniciacion', description: 'Alimento completo para pollitas de postura, ofrezca el alimento desde el nacimiento hasta la sexta semana de edad.', image: '/images/Pollita iniciacion.jpeg', category: 'Aves' },
    { id: '6', name: 'Pollito desarrollo', description: 'Alimento completo para el desarrollo de pollitas de postura, ofrezca el alimento desde la semana 15 de edad y hasta el inicio de la postura.', image: '/images/pollita desarrollo.jpeg', category: 'Aves' },
    { id: '7', name: 'Gallinaa de postura', description: 'Alimento completo para gallinas de postura, ofrezca este alimento desde la semana 20 de edad y durante todo el ciclo de reproducción.', image: '/images/gallinadepostura.jpeg', category: 'Aves' },
    { id: '8', name: 'Codornices de postura ', description: 'Alimento completo para ofrecer a codornices destinadas a la producción de huevo o reproductoras desde el inicio de la postura y durante todo el ciclo de producción.', image: '/images/codornizdepostura.jpeg', category: 'Aves' },
  ],
};

function ItemListContainer() {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (id) {
      setItems(productsMock[id]);
    } else {
      setItems([...productsMock.Cerdos, ...productsMock.Aves]);
    }
  }, [id]);

  return (
    <div className="container mt-5 pt-3">
      <h1>{id ? id : 'Todos los productos'}</h1>
      <div className="row">
        {items.map(item => (
          <div className="col-md-4" key={item.id}>
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
