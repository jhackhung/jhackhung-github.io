const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "Marshmallow",
        artist: 'Lukrembo',
        url: '/images/Lukrembo-Marshmallow(freetouse.com).mp3',
        cover: '/images/lukrembo_marshmallow.jpg'
      },
      {
        name: 'Life is Beautiful',
        artist: 'Aylex',
        url: '/images/Aylex-Life_is_Beautiful(freetouse.com).mp3',
        cover: '/images/life_is_beautiful.jpg'
      }
    ]
});