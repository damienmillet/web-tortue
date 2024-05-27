document.addEventListener('DOMContentLoaded', function () {
    const changeViewButton =
        document.getElementById('changeViewButton');
    const bookContainer = document.getElementById('bookContainer');
    const listContainer = document.getElementById('listContainer');

    changeViewButton.addEventListener('click', function () {
        bookContainer.classList.toggle('hidden');
        listContainer.classList.toggle('hidden');
    })
})

// update date format with Hhm every 60 seconds
setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dateContainer = document.getElementsByClassName('date');
    dateContainer.innerHTML = `${hours}h${minutes}`;
}, 60000);
