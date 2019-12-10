import React, {useEffect} from 'react';
import Speech from 'speak-tts';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// const Speak = ({answer}) => {
  // const speech = new Speech();
  //
  // try{
  //   await speech.init({
  //       volume: 0.5,
  //       lang: "en-US",
  //       rate: 1,
  //       pitch: 1,
  //       voice:"Google UK English Female",
  //       // 'splitSentences': false,
  //       listeners: {
  //         onvoiceschanged: voices => {
  //           console.log("Voices changed", voices);
  //         }
  //       }
  //   });
  //
  //   await speech.speak({
  //     text: 'way to go'
  //   });
  // } catch(e) {
  //   console.log('try/catch did not work: ', e);
  // };
//
//   return (
//     <h1>answer<h1/>
//   );
// };

const Speak = ({answer}) => {
  useEffect(() => {
    const talk = async () => {
      const speech = new Speech();

      try{
        await speech.init({
            volume: 0.5,
            lang: "en-US",
            rate: 1,
            pitch: 1,
            voice:"Google UK English Female",
            // 'splitSentences': false,
            listeners: {
              onvoiceschanged: voices => {
                console.log("Voices changed", voices);
              }
            }
        });

        await speech.speak({
          text: answer
        });
      } catch(e) {
        console.log('try/catch did not work: ', e);
      };
    };

    talk();
  },[]);

  return (
    <h1>{answer}</h1>
  );
};

const mapStateToProps = state => ({
  answer: state.answer
});

export default connect(mapStateToProps)(Speak);
