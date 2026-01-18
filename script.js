/* FORCE TOP ON RELOAD */
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const logo = document.getElementById('logo');
    const tagline = document.getElementById('tagline');
    const wrap = document.getElementById('wrap');

    let introDone = false;

    /* INTRO SEQUENCE */
    window.addEventListener('load', () => {
      setTimeout(() => {
        logo.classList.add('reveal');
      }, 300);

      setTimeout(() => {
        tagline.classList.add('reveal');
        introDone = true;
      }, 2300);
    });

    /* SCROLL TRANSITION */
    window.addEventListener('scroll', () => {
      if (!introDone) return;

      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / 320, 1);

      wrap.style.transform = `
        translateY(${ -40 - progress * 200 }px)
        scale(${ 1 - progress * 0.45 })
      `;

      tagline.style.opacity = `${ 1 - progress }`;
      tagline.style.transform = `translateY(${ progress * 20 }px)`;
    });
