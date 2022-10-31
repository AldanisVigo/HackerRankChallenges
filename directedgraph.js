/*
	author: Aldanis Vigo
	created: Sun Oct 30 2022 @ 12:18:38 PM
	contact: aldanisvigo@gmail.com

    Directed Graph Traversal
*/

//Create a graph node 
class Node {
    constructor(value,neighbors){
        this.value = value
        this.neighbors = neighbors
    }
}

//Create the graph data structure using the nodes
let a = new Node('a',[])
let b = new Node('b',[])
let c = new Node('c',[])
let d = new Node('d',[])
let e = new Node('e',[])
let f = new Node('f',[])

//Create the graph with no connections
let graph = [a,b,c,d,e,f]
console.log("Graph Without Connections")

//Adjacency list to establish connections between nodes
let adjacencyList = {
    a : [b,c],
    b : [d],
    c : [e],
    d : [],
    e : [b],
    f : [d]
}

//Fill the node neighbors based on the
//adjacency list
graph.forEach(node=>{
    node.neighbors = adjacencyList[node.value]
})
console.log("Graph With Connections")
console.log(graph)


//Depth First Traversal

/*
    1. Arbitrarily select a node to begin the traversal
*/
let head = graph[0]

/*
    2. Throw that node into a stack data structure
*/
let stack = [head]

/*
    3. Pop the head from the stack and add it's neighbors to the stack
*/
let explored = []
while(stack.length > 0){
    let currentNode = stack.pop()
    console.log("Explored node " + currentNode.value)
    explored.push(currentNode.value)
    stack = [...stack, ... currentNode.neighbors]
    console.log("New stack : ")
    console.log(stack)
}
console.log(stack)
console.log(explored)


//Breadth First Search
/*
    1. Arbitrarily select a node
*/

head = graph[0]

/*
    2. Throw the node into a queue data structure
*/

let queue = [head]

/*
    3. Pop the head from the queue and shift them to the front of the queue
*/
explored = []
while(queue.length > 0){
    let currentNode = queue.pop()
    console.log("Explored node " + currentNode.value)
    explored.push(currentNode.value)
    queue = [...currentNode.neighbors, ...queue]
    console.log("New Queue")
    console.log(queue)
}

console.log("Final Queue:")
console.log(queue)

console.log("Explored Nodes")
console.log(explored)


