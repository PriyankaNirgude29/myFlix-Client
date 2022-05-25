import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import { setFilter } from '../../actions/actions';

function VisibilityFilterInput(props) {
    const { visibilityFilter, setFilter }=props;
  return (
  <Form.Control
    className='border'
    onChange={(e) => setFilter(e.target.value)}
    value={visibilityFilter}
    placeholder="Search Movies"
  /> );
}

export default connect(null,{ setFilter })(VisibilityFilterInput);