import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  CollectionPreviewH1,
  PreviewContainer
} from './collection-preview.styles';
const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewH1>{title.toUpperCase()}</CollectionPreviewH1>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
