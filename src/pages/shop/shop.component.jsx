import React from 'react';

import CollectionPreview from '../../components/preview-collection/preview-collection.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { shopItems} from '../../redux/shop/shop.selector';



const ShopPage= ({ sections }) => (
    <div className = 'shop-page'>
        {
            sections.map( ({id, ...otherSectionProps}) => (
                <CollectionPreview key = {id} {...otherSectionProps}/>
            ))
        }
    </div>
  );

const mapStateToProps = createStructuredSelector({
    sections: shopItems
  });
  
export default connect(
mapStateToProps
)(ShopPage);
  