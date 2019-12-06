import React from 'react';
import {Alert} from 'react-bootstrap';

const ChangeValueAlert = ({change}) => (
  change === 0 || change === 2 || change === -3 || change === -5
    ?
    null
    :
  <Alert variant="primary">
    That is not a valid change in score.  Please clear the change and re-submit.
  </Alert>
);

export default ChangeValueAlert;
