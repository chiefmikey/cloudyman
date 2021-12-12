import { tommyman } from '../elements/tommyman.js';

import { getSpeed } from './speed.js';

export const spinLeft = () => {
  const speed = getSpeed();
  if (tommyman) {
    tommyman.style.transform = `rotate(${speed * -5000}deg)`;
  }
};

export const spinRight = () => {
  // degrees += 1;
  const speed = getSpeed();
  if (tommyman) {
    tommyman.style.transform = `rotate(${speed * 5000}deg)`;
  }
};