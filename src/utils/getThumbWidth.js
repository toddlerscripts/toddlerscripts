export default function getThumbWidth(winW, winH, count) {
  const rows = () => {
    return Math.ceil(count / columns);
  };
  let columns = 1;
  let thumbW = winW;
  const gridW = () => {
    return thumbW * columns;
  };
  const thumbH = () => {
    return Math.trunc((thumbW / 16) * 9);
  };
  const gridH = () => {
    return thumbH() * rows();
  };
  const overflow = () => {
    return gridH() - winH;
  };
  let i = 0;
  while (overflow() > 0) {
    i++;
    thumbW--;
    let wrapRoom = winW - gridW();
    if (wrapRoom >= thumbW) {
      columns++;
    }
  }
  return Math.trunc(thumbW);
}
