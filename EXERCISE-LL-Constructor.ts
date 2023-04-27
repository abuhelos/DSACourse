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
}

function test() {
    let myLinkedList = new LinkedList(4);
    myLinkedList.push(5);
    myLinkedList.push(6);
    myLinkedList.unshift(8);
    
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