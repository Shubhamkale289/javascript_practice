import java.io.*;
import java.util.*;

public class SLL{
    Node head;

    static class Node{
        int data;
        Node next;

        Node (int data){
            this.data = data;
            this.next = null;
        }
    }

    // print linked list
    public void print(){
        Node curr = head;
        while(curr != null){
            System.out.print(curr.data + "->");
        }
        System.out.print("null");
        System.out.println();
    }
}