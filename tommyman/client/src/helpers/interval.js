import { getSpeed } from '../controls/speed.js';
import { tommyman } from '../elements/tommyman.js';

const graphic = document.getElementById('graphic');
const colorChar = 'abcdef0123456789';

let intervals = [];

const clearAll = () => {
  for (let i = 0; i < intervals.length; i += 1) {
    clearInterval(intervals[i]);
  }
  intervals = [];
};

const addInterval = (interval, left, bottom) => {
  clearAll();

  const hash = () => {
    let build = '';
    for (let i = 0; i < 6; i += 1) {
      build += colorChar[((colorChar.length - 1) * Math.random()).toFixed()];
    }
    return build;
  };

  const newCircle = (hashed) => {
    const ns = 'http://www.w3.org/2000/svg';
    const path1 = document.createElementNS(ns, 'path');
    const path2 = document.createElementNS(ns, 'path');
    const path3 = document.createElementNS(ns, 'path');
    const path4 = document.createElementNS(ns, 'path');

    path1.setAttributeNS(null, 'fill', `#${hashed}`);
    path2.setAttributeNS(null, 'fill', `#${hashed}`);
    path3.setAttributeNS(null, 'fill', `#${hashed}`);
    path4.setAttributeNS(null, 'fill', `#${hashed}`);

    path1.setAttributeNS(
      null,
      'd',
      'M59.8,191.2c-4-4-41.3-25.9-51.2-49.6C-2,116.4,1.9,92.9,19.1,71.7C32,55.8,49.2,45.9,67.8,38.3c21.6-8.8,20.8-5.2,35.1-26.3c7.7-11.5,32.2-7.2,36.9,1.9c5.2,10.1,14,14.1,24.6,16.4c19.3,4.2,36.6,12.5,50.7,26.9c12.1,12.4,18.6,26.8,18.2,44.7c0.2,22.9-9.8,41.9-26.3,57.6c-9,8.5-19,16-29,23.4c-5,3.7-9.2,7.6-11.4,13.4c-4.8,13-15.1,20.8-25.9,28.4c-10.6,7.5-22.3,7.7-33.1,2.9c-9.5-4.2-21.5-12.3-26.5-17.3S63.8,195.2,59.8,191.2z M174.2,164.8c2.2-15.2,2.2-30.4-1-45.5c-2.1-10-4-20.1-6.1-30.1c-2.4-11.4-12.7-21.5-23.6-22.9c-3.2-0.4-6.7-0.2-9.8,0.6c-9.4,2.5-18.7,5.6-27,8.1c-1.6-1-3.1-2.7-4.5-2.7C91,72.6,82.7,79.2,74.7,86.1c-0.1,0.1-0.2,0.3-0.3,0.4c-5.4,9.5-3.9,24.5,3.4,33.2c1-0.5,2-0.9,3.1-1.4c7.3-3.5,23.8-0.4,29.2,5.5c4.5,4.9,4.9,10.4,2.2,12.7c-2.8,0-4.5,0-6.1,0c-1,0-2,0.2-3,0.2c-5,0.3-10.2-0.4-14.2,4.1c-0.6,0.7-2.5,0.5-3.7,0.2c-2.2-0.6-4.4-1.4-6.5-2.3c-6-2.5-7.9-1.2-7.1,5.4c0.7,5.9,2.2,11.8,2.4,17.7c0.3,9.8,6.3,16.5,10.7,23.4c6.3-2.7,11.9-4.9,17.4-7.6c3.3-1.6,6.3-3.7,5.2-8.6c-0.4-1.7,0.5-4.5,1.8-5.7c1-0.9,3.9-0.4,5.5,0.4c4.1,2.3,7.9,2.9,12.2,0.3c1.2-0.7,3.6-0.3,4.9,0.5c0.8,0.5,0.2,2.8,0.4,4.3c0.3,1.7,0.2,4,1.2,4.8c2.7,2.1,5.8,4.5,9,5c5.3,0.9,8.4,3.8,11,8.2c2.2,3.8,5.2,3.4,7.6-0.3c3.2-4.9,6.6-9.7,10.5-15.2L174.2,164.8z M119.6,191.7c0,0.2,0,0.5,0,0.7c-0.5,0-1.1-0.2-1.5-0.1c-1.5,0.6-3,1.3-4.4,2c1.5,0.9,2.9,2.3,4.5,2.7c1.9,0.5,4,0.1,5.9,0.5c4.7,0.9,5.7,3.7,3.6,7.9c-0.7,1.4-0.5,4.6,0.2,4.9c1.9,0.9,4.9,1.5,6.4,0.6c3.4-2.2,6.3-5.3,9.2-8.3c3.3-3.5,3-6.5-1.3-8.7c-2.4-1.2-5.2-2-7.8-2.2C129.5,191.5,124.5,191.7,119.6,191.7z M175.9,169.7c0.6,0.3,1.2,0.6,1.8,1c1.3-1.6,3.4-3.1,3.8-4.9c2.4-10.1,4.6-20.3,6.5-30.5c0.5-2.8,0-6-0.8-8.8c-0.4-1.3-2.4-2.7-3.9-3c-1-0.1-2.9,1.6-3.2,2.8c-1,3.6-1.5,7.4-2,11.1c-0.4,2.6-0.7,5.2-0.8,7.7C176.7,153.3,176.3,161.5,175.9,169.7z M100.5,125.8c-6.9-1.9-12.7-3.4-18.6-0.6c-1.2,0.5-1.8,2.3-2.7,3.5c1.5,0.7,3.2,2.4,4.5,2.1C88.9,129.5,94,127.7,100.5,125.8z M116,208.8c-2.4-2-3.7-3.5-5.3-4.3c-1.1-0.6-2.9-1-3.9-0.6c-0.7,0.3-1.3,2.6-0.9,3.4c0.8,1.4,2.2,3,3.6,3.3C111.2,210.8,113,209.7,116,208.8z',
    );
    path2.setAttributeNS(
      null,
      'd',
      'M142.7,134.1c-3.7-0.5-7.4-0.9-11-1.7c-1.1-0.2-2.8-1.8-2.7-2.7c0.1-1.2,1.4-2.9,2.5-3.3c7.1-2.6,14.4-3.5,21.8-0.9c1.3,0.5,2.7,1.4,3.6,2.5c0.7,0.9,1.1,2.4,1,3.5c-0.1,0.6-1.8,1.2-2.8,1.3c-4.1,0.4-8.2,0.5-12.3,0.8C142.7,133.8,142.7,133.9,142.7,134.1z',
    );
    path3.setAttributeNS(
      null,
      'd',
      'M162.8,120.7c-9.6-4.7-18.2,0-27.1,1.9c-1.3,0.3-2.7-0.2-4-0.4c0.6-1.4,0.9-3.9,1.8-4.1c7.9-1.5,15.3-6.9,23.8-3.9c2.3,0.8,4.1,3,6.2,4.6C163.3,119.4,163.1,120.1,162.8,120.7z',
    );
    path4.setAttributeNS(
      null,
      'd',
      'M185.7,127.5c0,2.9,0,5.6,0,8.7C182.1,131.3,182.1,129.4,185.7,127.5z',
    );
    const paths = document.createElementNS(ns, 'svg');
    paths.append(path1);
    paths.append(path2);
    paths.append(path3);
    paths.append(path4);
    paths.style.width = '236px';
    paths.style.height = '236px';
    paths.style.position = 'absolute';
    paths.style.left = `${left}px`;
    paths.style.bottom = `${bottom}px`;
    paths.style.transform = `${tommyman.style.transform}`;
    graphic.append(paths);
  };
  newCircle(hash());

  const speed = getSpeed();
  for (let i = 0; i < speed; i += 1) {
    intervals.push(interval());
  }
};

export default addInterval;
