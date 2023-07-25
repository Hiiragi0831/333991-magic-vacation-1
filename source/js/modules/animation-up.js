export default () => {
  const animateWord = (word) => {
    const text = word.innerHTML;
    const words = text.split(` `);
    word.innerHTML = ``;

    for (let i = 0; i < text.length; i++) {
      console.log(text.charAt(i));
      let span = document.createElement(`span`);
      span.textContent = text.charAt(i);
      word.appendChild(span);
    }

  };

  animateWord(document.querySelector(`.intro__title`));
};
