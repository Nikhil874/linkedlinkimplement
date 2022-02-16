class Node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}
class linkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    //addelement
    adding(element){
        let node=new Node(element);
        if(this.head==null){
            this.head=node;
            this.size++;
        }
        else{
            var current=this.head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=node;
            this.size++;
          
            }
    }
    printList(){
        let i=0;
        let curr=this.head;
        while(curr){
            console.log("element:",curr.element,"index:",i);
            curr=curr.next;
            i++;
        }

    }
   insertAt(element,position){
       //check if position is -ve  or position is greater than size
       let node=new Node(element);
       if(position>this.size||position<0){
           return false;
       }
       if(position==0){
        node.next=this.head;
        this.head=node;
        this.size++;
        return;
       }
       else{
           let i=0;
           let curr=this.head;
           while(i!=position){
                var prev=curr;
                curr=curr.next;
                i++;
           }
           prev.next=node;
           node.next=curr;
           this.size++;
           return;
       }
   }
   sizeOfLL(){
       console.log(this.size);
       return;
   }
   removeElement(element){
    if(this.head.element==element){
        this.head=this.head.next;
        this.size--;
        return;
    }else{
        var curr=this.head;

        while(curr.element!=element){
            var prev=curr;
            curr=curr.next;
        }
        prev.next=curr.next;
        this.size--;
        return;
    }
   }

}


let list =new linkedList();
list.adding(5);
list.adding(6);
list.adding(7);
list.insertAt(8,0);
list.insertAt(8,-1);
list.insertAt(2,2);
list.removeElement(6);
list.printList();