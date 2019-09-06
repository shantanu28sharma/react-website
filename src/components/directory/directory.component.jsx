import React from 'react';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directoryItems } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.components'
import './directory.style.scss'


const Directory = ({ sections }) => (
  <div className = 'directory-menu'>
      {
          sections.map( ({id, ...otherSectionProps}) => (
              <MenuItem key = {id} {...otherSectionProps}/>
          ))
      }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: directoryItems
});

export default connect(
  mapStateToProps
)(Directory);
