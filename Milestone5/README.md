# DOM
## Selector
 - getElementsByTagName('h1')
 - getElementById('fruits-title')
 - getElementsByClassName('important-places')
 ## Query Selector
 - querySelectorAll('#fruits-title')
 - querySelector()

 ## Adding CSS Class
 ``` javascript
 const title = document.getElementById('abc')
 title.classList
 title.classList.add()
 title.classList.remove()
 ```
 ## Adding Element
 ``` javascript
 // 1. where to add
const placesList = document.getElementById('places-list');
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';
// 3. add the child
placesList.appendChild(li);

// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando genji</li>
</ul>
`
mainContainer.appendChild(sectionDress);
```
## How to add an event
- Option 1
```javascript
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
```

- Option 2
``` javascript
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})
```
### Event Listener
- mouse
    1. click
    2. mouseenter
    3. mousemove
- input field
    1. focus
    2. blur
- keyboard
    1. keydown
    2. keypress
    3. keyup (important)

### Goto another page
```javascript
window.location.href='bank.html'
```

