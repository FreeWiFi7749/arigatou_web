document.getElementById('twitterShare').addEventListener('click', () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(document.location.href)}&text=${encodeURIComponent('ありがとうを伝えよう。')}`;
    window.open(shareUrl, '_blank');
  });

document.getElementById('lineShare').addEventListener('click', () => {
    const shareUrl = `https://line.me/R/msg/text/?${encodeURIComponent(document.location.href)}`;
    window.open(shareUrl, '_blank');
  });

  document.getElementById('copyUrl').addEventListener('click', () => {
    navigator.clipboard.writeText(document.location.href).then(() => {
      console.log('URLがクリップボードにコピーされました。');
      alert('URLがクリップボードにコピーされました。');
    }).catch(err => {
      console.error('URLをクリップボードにコピーできませんでした。', err);
      alert('エラー')
    });
  });