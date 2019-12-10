export const createGameString = array => {
  const name1 = ['re', 'be', 'ka'];
  const name2 = ['sam', 'you', 'el'];
  const name3 = ['ab', 'ba', 'gail'];

  const names = [...name1, ...name2, ...name3];

  const bonus = ['grandpa wayne', 'wayne'];
  const fakes = ['wait a minute', 'way to go', 'grandpa kills baby deers', 'grandpa smelly feet', 'poopy pants', 'grandpa way to go', 'grandpa wait a minute'];

  const nonNames = [...bonus, ...fakes];

  const gameArray = [...names, ...names, ...names, ...nonNames];

  const select = array => Math.floor(Math.random() * array.length);

  const newArray = [];
  for(let i = 0; i < 3; i ++) {
    newArray.push(gameArray[select(gameArray)]);
  };
  return newArray.join('--');
};
