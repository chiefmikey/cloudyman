/* eslint-disable sonarjs/no-duplicate-string */
import K from '../functions/init.js';
import characters from '../content/characters.js';
import controls from '../functions/controls.js';

const two = () => {
  const level = [
    '=======F=======',
    '=             =',
    '=             =',
    '=     !       =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=      @      =',
    '===============',
  ];

  K.addLevel(level, {
    width: 11,
    height: 11,
    pos: K.vec2(20, 20),
    '=': [K.sprite('steel'), K.solid()],
    '@': [K.sprite('guy'), 'playerOne'],
    '!': [
      K.sprite(characters.cloudyman.sprite),
      K.solid(),
      characters.cloudyman.sprite,
      { msg: characters.cloudyman.msg },
    ],
    F: [K.sprite('door'), K.solid(), 'finalDoor'],
  });
  controls();
};

export default two;