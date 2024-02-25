document.getElementById('twitterShare').addEventListener('click', () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(document.location.href)}&text=${encodeURIComponent('ありがとうを伝えよう。')}`;
    window.open(shareUrl, '_blank');
  });

document.getElementById('lineShare').addEventListener('click', () => {
    const shareUrl = `https://line.me/R/msg/text/?${encodeURIComponent(document.location.href)}`;
    window.open(shareUrl, '_blank');
  });

document.getElementById('lineShare').addEventListener('click', () => {
    const shareUrl = `https://line.me/R/msg/text/?${encodeURIComponent(document.location.href)}`;
    window.open(shareUrl, '_blank');
  });