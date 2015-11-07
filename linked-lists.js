
function Node(data,next) {
   this.data = data;
   this.next = next;
}

function List(node) {
   this.head = node;
}

var node4 = new Node("add this one on");
var node3 = new Node("last node");
var node2 = new Node("second node",node3);
var node1 = new Node("first node",node2);
var list = new List(node1);

List.prototype.addNode = function(node) {
 var currentNode = this.head;
 while(currentNode.next) {
   currentNode = currentNode.next;
 }
 currentNode.next = node;
};

List.prototype.getTail = function() {
 var currentNode = this.head;
 while(currentNode.next) {
   currentNode = currentNode.next;
 }
 return currentNode;
};

List.prototype.delete = function () {
  this.head = null;
};


List.prototype.find = function(n) {
  var currentNode = this.head; 
  var count  = n;
  while(count < n){
    currentNode = currentNode.next;
    count ++;
  }
  return currentNode;
};

List.prototype.count = function() {
  var currentNode = this.head; 
  var count = 0;
  while (currentNode.next){
    currentNode = currentNode.next;
    count ++;
  }
  return count;
};

List.prototype.deleteAt = function(n){
  var currentNode = this.head; 
  count = 1;
  while (count < (n -1)){
    currentNode = currentNode.next;
    count ++;
  }
  currentNode = currentNode.next.next;
};

List.prototype.includes = function(data){
  var currentNode = this.head;
  var found = false;
  while(currentNode.data !== data){
    currentNode = currentNode.next; 
  }
};

console.log(list.count());
