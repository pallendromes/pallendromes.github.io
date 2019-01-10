var store = localStorage.getItem('store') 
var template =  `<button class="tablink" onclick="openCity('Tab1', this, 'red')" id="defaultOpen">Test</button>
<button class="tablink" onclick="openCity('Tab2', this, 'green')">Tab2</button>
<button class="tablink" onclick="openCity('Tab3', this, 'blue')">Tab3</button>
<button class="tablink" onclick="openCity('Tab4', this, 'orange')">Tab4</button>

<div contenteditable id="Tab1" class="tabcontent">
<h1>Tab1</h1>
<p>Tab1</p>
</div>

<div contenteditable id="Tab2" class="tabcontent">
<h1>Tab2</h1>
<p>Tab2</p> 
</div>

<div contenteditable id="Tab3" class="tabcontent">
<h1>Tab3</h1>
<p>Tab3</p>
</div>

<div contenteditable id="Tab4" class="tabcontent">
<h1>Tab4</h1>
<p>Tab4</p>
</div>`;



localStorage.setItem('template', template);

if (store){
	document.body.innerHTML = store;
} else {
    document.body.innerHTML = template;
};




window.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        console.log('enter');
        localStorage.setItem('store', document.body.innerHTML);
    }
});


