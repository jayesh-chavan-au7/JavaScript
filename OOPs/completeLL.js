class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
    }

    printLL(){
        let temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    insert(x){
        if(this.head == null){
            this.head = new Node(x);
            return;
        }
        let temp = this.head;
        while (true) {
            if(temp.next == null){
                temp.next = new Node(x);
                return
            }
            temp = temp.next;
        }
    }

    arrInsert(arr){
        arr.forEach(element => {
            this.insert(element);
        });
        return;
    }

    delete(node){
        let temp = this.head;
        if (temp.data == node) {
            let x = temp.next;
            temp.next = null;
            this.head = x;
            return;
        }
        let prev = temp;
        while (temp) {
            if(temp.data == node){
                let x = temp.next;
                temp.next = null;
                prev.next = x;
                return;
            }
            prev = temp;
            temp = temp.next;
        }
        console.log("node not in LinkedList");
    }

    isEmpty(){
        if(this.head == null){
            return true;
        }else{
            return false;
        }
    }

    sizeOf(){
        let temp = this.head;
        let size = 0;
        while (temp) {
            size++;
            temp = temp.next;
        }
        return size;
    }

    indexOf(x){
        let temp = this.head;
        let index = 0;
        while (temp) {
            if(temp.data == x){
                return index
            }
            index++;
            temp = temp.next
        } 
        console.log("Element not found");
    }
}

const LL = new linkedList();

let arr = [1,2,3,4,5,6,7,8,9];
console.log("isEmpty before inserting : ",LL.isEmpty())
LL.arrInsert(arr);
console.log("isEmpty after inserting : ",LL.isEmpty())
console.log("size of list : ",LL.sizeOf());
LL.delete(9);
console.log("index of 5 after deleting 9 : ",LL.indexOf(5))
LL.printLL();