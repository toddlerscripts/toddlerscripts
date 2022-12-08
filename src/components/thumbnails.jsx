import { Image, WrapItem } from '@chakra-ui/react';

const Thumbnails = ({ videosForToddler, thumbW, handleClick }) =>
  videosForToddler.map((video, index) => {
    const url = video[5];
    const strs = url.split('/');
    const id = strs.at(-2);
    let imgSrc = 'https://drive.google.com/uc?export=view&id=' + id;
    return (
      <WrapItem key={index}>
        <Image
          src={imgSrc}
          alt={video[0]}
          width={thumbW}
          height={(thumbW / 16) * 9}
          onClick={handleClick({
            id: video[2],
            start: video[3],
            end: video[4],
          })}
        />
      </WrapItem>
    );
  });

export default Thumbnails;
