console.log('pippo')

const _window = window;
const descriptionSection = document.querySelector('#description');

let isOnTopPage = true;



_window.addEventListener('scroll', (e) => {
    console.log(e);
    console.log(_window.pageYOffset);

    if(_window.pageYOffset === _window.innerHeight) {
        // add animation to second div
        descriptionSection.classList.add('animate');
    }

    if (_window.pageYOffset === 0) {
        isOnTopPage = true;
        return;
    }

    if (!isOnTopPage) return;

    if(_window.pageYOffset > 0 && isOnTopPage) {
        isOnTopPage = false;
        window.scrollTo({
            top: _window.innerHeight,
            behavior: 'smooth'
        });
    }
})
