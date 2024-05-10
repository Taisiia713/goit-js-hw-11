export function getPhoto(value) {
  const KEY = '43812511-1ad98af5969ab2e5e6977c36e';
  const params = new URLSearchParams({
    key: KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const bazeUrl = 'https://pixabay.com/api/';
  const url = `${bazeUrl}?${params}`;

  return fetch(url).then(res => res.json());
}
