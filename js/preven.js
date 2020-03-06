let prevent = document.querySelectorAll('.prevent');

for (let i = 0; i < prevent.length; i++) {
    const el = prevent[i];
    el.addEventListener('click', (e) => e.preventDefault())
}