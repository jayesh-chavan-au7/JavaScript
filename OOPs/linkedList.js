class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
    }

    printLL(){
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next
        }
    }
}

const LL = new linkedList();

LL.head = new Node(1);
const second = new Node(2);
const third = new Node(3);

LL.head.next = second;
second.next = third;
third.next = null;

LL.printLL();
// const k = new Node(1)
// console.log(k);
