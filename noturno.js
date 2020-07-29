const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    //Mudança da cor
    document.body.classList.toggle('dark');
});
