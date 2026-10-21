// Animate supplied device photos without modifying their screens.
export function initHubMotion() {
  const button = document.getElementById('hub-motion');
  const banner = document.querySelector('.campaign-banner');
  const track = banner.querySelector('.banner-track');
  const group = track.querySelector('.banner-group');
  // Three equal groups keep the rotated viewport covered throughout the loop.
  // Start at the middle group so the loop always has a leading and trailing copy.
  track.append(group.cloneNode(true), group.cloneNode(true));
  track.classList.add('is-loop-ready');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false, visible = true;
  function sync() {
    const stopped=paused||reduce.matches||document.hidden;
    document.body.classList.toggle('motion-paused',stopped);
    banner.classList.toggle('motion-idle', stopped || !visible);
    button.disabled=reduce.matches;button.setAttribute('aria-pressed',String(paused||reduce.matches));
    button.textContent=reduce.matches?'Reduced motion':paused?'Resume motion ▷':'Pause motion Ⅱ';
  }
  button.addEventListener('click',()=>{paused=!paused;sync();});
  reduce.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();}).observe(banner);
  sync();
}
