/*
	A node
*/
class Node {
	constructor(value,next){
		this.value = value
		this.next = next
	}
}


let head = new Node(1,null)

let item1 = new Node(2,null)

head.next = item1

let item2 = new Node(3,null)

item1.next = item2



const traverse = (head) => {
	let current = head
	while(current.next){
		console.log(current.value)
		current = current.next
	}
	console.log(current.value)
}

traverse(head);

const search = (head,val) => {
	let current = head
	while(current.next){
		if(current.value === val){
			console.log("Found the value " + val);
			break;
		}
		current = current.next
	}
	if(current == null) console.log("Item not found")
	return current;
}



search(head,2)

const del = (head,val) => {
	let h = head
	//If the head has the value and there's no next return null
    if(h.value === val && !h.next){ //Edge case only 1 element and value is in it
        h = null
        return
    } else if(h.value === val && h.next){ //Value at index 0
        h = h.next
        return
    } else{ //Value at any other index
        // if(!h.next.value) return null
        while(h.next){ //While there's a next node to traverse
            if(h.next.value != val){//If the next node's value is not the value
                h = h.next //Go to the next node
            }else{
                break
            }        }
        //Replace the next node's next to the one after removing the node with the val
        h.next = h.next.next 
        return
    }
}

del(head,2)
traverse(head)

