
const data = [];
const moods = [
  0x1F60D, // 😍
  0x1F60A, // 😊
  0x1F603, // 😃
  0x1F60F, // 😏
  0x1F620, // 😠
  0x1F632, // 😲
  0x1F615, // 😕
  0x1F622 // 😢
];

for (let i = 0; i < 150; i++) {
  const random = Math.floor(Math.random() * moods.length);
  const pics=["Icon.1_01.png","Icon.1_02.png","Icon.1_03.png","Icon.1_04.png","Icon.1_05.png","Icon.1_06.png","Icon.1_07.png","Icon.1_08.png","Icon.1_09.png"]
  data.push({
    id: i + 1,
    name: pics[i],
    url: "art\\"+pics[i],
    mood: String.fromCodePoint(moods[random])
  });
}

const total = data.length;

export default (path, params = {}) => {
  const per_page = params.per_page || 5;
  const last_page = Math.ceil(total / per_page);
  const page = params.page || 1;
  const from = (page - 1) * per_page;
  const to = page * per_page;

  const slice = data.slice(from, to);

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({
        'total': total,
        'per_page': per_page,
        'current_page': page,
        'last_page': last_page,
        'from': from,
        'to': to,
        'data': slice
      });
    }, 10);
  });
};