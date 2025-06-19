export const playSound = (soundUrl, isMuted, volume = 0.5) => {
  if (isMuted) return;
  
  const audio = new Audio(soundUrl);
  audio.volume = volume;
  audio.play().catch(error => console.log("Sound play was prevented:", error));
};

export const sounds = {
  login: 'https://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3',
  select: 'https://commondatastorage.googleapis.com/codeskulptor-assets/soundeffects/key-press.mp3',
  next: 'https://commondatastorage.googleapis.com/codeskulptor-assets/soundeffects/click.mp3',
};