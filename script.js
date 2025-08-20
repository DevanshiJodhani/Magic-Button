let button = document.querySelector('.btn')

button.addEventListener('click', function () {
  for (let i = 0; i < 50; i++) {
    let dot = document.createElement('i')

    dot.classList.add('dot')

    document.body.appendChild(dot)

    const size = Math.random() * 8 + 2;
    dot.style.width = size + 'px';
    dot.style.height = size + 'px';

    const X = (Math.random() - 0.5) * window.innerWidth;
    const Y = (Math.random() - 0.5) * window.innerHeight;

    dot.style.setProperty('--x', X + 'px')
    dot.style.setProperty('--y', Y + 'px')


    setTimeout(function (){
      dot.remove()
    }, 1000)
  }
})