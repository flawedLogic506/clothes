import React from 'react';
import '../styles/collection-item.scss';

const CollectionItem = (props) => {
  const { id, name, price, imageUrl } = props;
  return (
    <div className="collection-item" key={id}>
      <div
        className="image"
        style={{backgroundImage: `url(${imageUrl})`}}>
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
