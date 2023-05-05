type LinkedNodeType = {
    value: number;
    next: null | LinkedNode
}

type LinkedListType = {
    head: LinkedNodeType | null 
    tail: LinkedNodeType | null
    length: number
}

class LinkedNode {
    value: number
    next: null | LinkedNode

    constructor(value: number) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    head: LinkedNodeType | null
    tail: LinkedNodeType | null
    length: number

	constructor(value: number) {
        const newNode = new LinkedNode(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value: number) {
        const newNode = new LinkedNode(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail!.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head
        let pre = this.head
        while (temp!.next != null) {
            pre = temp;
            temp = temp!.next
        }
        this.tail = pre;
        this.tail!.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value: number) {
        const newNode = new LinkedNode(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.next = this.head
            this.head = newNode
        }
        return this
    }

    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i=0; i<index; i++){
            temp = temp!.next
        }
        return temp;
    }

    set(index: number, value: number) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index: number, value: number){
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(index);
        const newNode = new LinkedNode(value);
        let temp = this.get(index-1);
        newNode.next = temp!.next;
        temp!.next = newNode;
        this.length++;
        return true;
    }

    remove(index: number){
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const before = this.get(index - 1);
        const temp = before!.next;
        before!.next = temp!.next;
        temp!.next = null;
        this.length--;
        return temp;
    }
}

function test() {
    let myLinkedList = new LinkedList(4);
    myLinkedList.push(5);
    myLinkedList.push(6);
    myLinkedList.insert(2,3);
    myLinkedList.remove(2);
    
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/