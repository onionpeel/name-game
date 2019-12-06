import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Calculate from './Calculate';
import Scoreboard from './Scoreboard';
import Header from './Header';
import Welcome from './Welcome';

const Game = ({count}) => (
  count === 0
    ?
      <Welcome />
    :
      <>
        <Header />
        <Scoreboard />
        <Calculate />
      </>
);


Game.propTypes = {
  count: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Game);
