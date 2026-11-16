const SearchInput = document.getElementById('Glossarysearch');
const Glossarylist = document.getElementById('Glossarylist');
const Glossaryitems = Glossarylist.getElementsByTagName('li');

SearchInput.addEventListener('input', function(e) {
    const SearchTerm = e.target.value.toLowerCase();

    for (let i = 0; i < Glossaryitems.length; i++) {
        const itemText = Glossaryitems[i].textContent ? Glossaryitems[i].textContent.toLowerCase() : glossaryItems[i].innerText.toLowerCase();
        
        if (itemText.includes(SearchTerm)) {
            Glossaryitems[i].style.display = "";
        } else {
            Glossaryitems[i].style.display = "none";
        }
    }
});