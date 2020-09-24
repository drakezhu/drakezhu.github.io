var width = window.innerWidth;
var height = window.innerHeight;
var childrenPage = ['resume', 'project', 'introduction'];
var labels = ''
var start = width * 0.3
var end = width * 0.7
var innerwidth = start - end;
var blankSpace = innerwidth / childrenPage.length

for (label in childrenPage){
	labels += childrenPage[label]
	labels += '&#8201;'
}

console.log(this)
console.log(childrenPage)
document.write(labels)