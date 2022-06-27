let paragraphs = document.getElementsByTagName('p')

for (elt of paragraphs){
   elt.innerText = 'my first extension';
   elt.style['background-color'] = '#FFD700';
}