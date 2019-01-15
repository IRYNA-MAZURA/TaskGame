export function drawImage(img, x, y, width, height) {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  if (!img.loaded) return;
  context.drawImage(img.dom, x, y, width, height);
}

export function loadImage(path) {
  const image = document.createElement('img');

  const result = {
    dom: image,
    loaded: false,
    num: 1,
  };

  image.onload = () => {
    result.loaded = true;
  };
  image.src = path;

  return result;
}
