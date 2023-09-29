export default function decorate(block) {
  const h1 = block.querySelector('h1');
  const picture = block.querySelector('picture');
  const blue = document.createElement('div');
  blue.classList.add('blue-box');
  blue.innerHTML = '<h2>hello</h2>';
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    // const section = document.createElement('div');
    // const hero = buildBlock('hero-content', { elems: [picture, h1] });
    // section.append(hero);
    block.querySelector('div').append(blue);
    // block.prepend(section);
  }
}
