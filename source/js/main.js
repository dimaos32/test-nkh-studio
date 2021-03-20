const TRANSITION_TIME = 300; // ms

const accordions = document.querySelectorAll('.accordion');

const initAccordionState = () => {
  const activeAccordions = document.querySelectorAll('.accordion--active');

  if (activeAccordions.length) {
    activeAccordions.forEach((activeAccordion) => {
      const content = activeAccordion.querySelector('.accordion__content');

      content.style.transition = 'none';
      content.style.maxHeight = '100%';

      setTimeout(() => {
        content.style.transition = null;
        content.style.maxHeight = `${activeAccordion.scrollHeight}px`;
      }, TRANSITION_TIME);
    });
  }
};

const initAccordionAction = (accordion) => {
  const btn = accordion.querySelector('.accordion__btn');
  const content = accordion.querySelector('.accordion__content');

  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    btn.blur();
    const maxHeight = content.style.maxHeight;

    if (maxHeight) {
      content.style.maxHeight = null;
      accordion.classList.remove('accordion--active');
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
      accordion.classList.add('accordion--active');
    }
  });
};

if (accordions.length) {
  initAccordionState();
  accordions.forEach((accordion) => initAccordionAction(accordion));
}
