import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Center,
  Container,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { MdPhotoSizeSelectLarge } from 'react-icons/md';
import Thumbnails from './thumbnails';
import Video from './video';
import getThumbWidth from '../utils/getThumbWidth';
import '.././App.css';

export default function Toddler({ data }) {
  const location = useLocation();
  const toddlerName = location.pathname.replace('/', '');
  const winW = window.innerWidth;
  const winH = window.innerHeight;
  const [videoToPlay, setVideoToPlay] = useState(null);
  const videosForToddler = data.filter(pickToddler);
  const count = videosForToddler.length;
  const defaultW = getThumbWidth(winW, winH, count);
  const [thumbW, setThumbW] = useState(defaultW);

  function pickToddler(item) {
    return item[1] === toddlerName;
  }

  const handleClick = (video) => (e) => {
    setVideoToPlay(video);
  };
  return (
    <div className='App' id='app'>
      {videoToPlay ? (
        <Video videoToPlay={videoToPlay} setVideoToPlay={setVideoToPlay} />
      ) : (
        <Container maxW='100%' padding='0px' centerContent>
          <Wrap spacing='0' justify='center'>
            <Thumbnails
              videosForToddler={videosForToddler}
              thumbW={thumbW}
              handleClick={handleClick}
            />
          </Wrap>
        </Container>
      )}
    </div>
  );
}
