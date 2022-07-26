
window.showAll = () => {
    var e = document.getElementById('all');
    if (e.checked) {
        document.querySelectorAll('.model').forEach(values => { values.checked = true });
    } else {
        document.querySelectorAll('.model').forEach(values => { values.checked = false });
    }

};

window.showAllcategory = () => {
    var e = document.getElementById('categories');
    if (e.checked) {
        document.querySelectorAll('.category').forEach(values => { values.checked = true });
    } else {
        document.querySelectorAll('.category').forEach(values => { values.checked = false });
    }

};