// Binary search tree
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Алгоритм вставки узла
// I. Вставка начинается с корня
//  1. Если корня не существует, элемент становится корнем
//  2. Если элемент меньше текущего значения узла, идем налево
//  3. Если элемент больше текущего значения узла, идем направо
// II. Когда следующего элемента не существует - вставляеи элемент
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Алгоритм поиска узла
// 1. Если элемент меньше текущего значения узла, идем налево
// 2. Если элемент больше текущего значения узла, идем направо
// 3. Если элементы равны выводим результат
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Алгоритм поиска наименьшего элемента
//  Идем от корня налево до несуществующего узла
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Алгоритм поиска наибольшего элемента
//  Идем от корня направо до несуществующего узла
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Алгоритмы обхода дерева
//  1. in-order - симметричный обход (left, root, right) sort data
//  2. pre-order - прямой обход (root, left, right) copy
//  3. post-order -  обратный обход (left, right, root) delete all nodes



class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Bst {

    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    } 

    size(){
        return this.count;
    }

    insert(value){
        this.count++;
        let newNode = new Node(value);

        const searchTree = node => {
            if(value < node.value) {
                if(!node.left){
                    node.left = newNode;
                }else{
                    searchTree(node.left);
                }
            }else if(value > node.value){
                if(!node.right){
                    node.right = newNode;
                }else{
                    searchTree(node.right);
                }
            }
        };

        searchTree(this.root);
    }

    min(){
        let currenNode = this.root;
        while(currenNode.left){
            currenNode = currenNode.left;
        }
        return currenNode;
    }

    max(){
        let currenNode = this.root;
        while(currenNode.right){
            currenNode = currenNode.right;
        }
        return currenNode;
    }

    contains(value){
        let currenNode = this.root;
        while(currenNode){
            if(value === currenNode.value) return true;
            if(value < currenNode.value){
                currenNode = currenNode.left;
            }else if(value > currenNode.value){
                currenNode = currenNode.right;
            }
        }
        return false;
    }

    // dfs - depth firs search - поиск в глубину - branch by branch

    // in-order - симметричный обход
    // left, root, right
    dfsInOrder(){
        const result = [];

        const traverse = node => {

            if(node.left) traverse(node.left);

            result.push(node.value);

            if(node.right) traverse(node.right);

        };

        traverse(this.root);

        return result;
    }

    // pre-order - прямой обход 
    // root, left, right
    dfsPreOrder(){
        const result = [];

        const traverse = node => {

            result.push(node.value);

            if(node.left) traverse(node.left);

            if(node.right) traverse(node.right);

        };
        
        traverse(this.root);

        return result;
    }

    // post-order  - обратный обход
    // left, right, root
    dfsPostOrder(){
        const result = [];

        const traverse = node => {

            if(node.left) traverse(node.left);

            if(node.right) traverse(node.right);

            result.push(node.value);

        };
        
        traverse(this.root);

        return result;
    }
    delete(value){
        let newNode = new Node(value);

        const searchTree = node => {
            if(value < node.value){
                searchTree(node.left);
            }else if(value > node.value){
                searchTree(node.right);
            }else if(value === node.value){
                if(node.left === null && node.right === null){
                    node = null; 
                }else if(node.left && (node.right === null)){
                    
                }else if(node.right && (node.left === null)){
                    
                }else if(node.left && node.right){

                }
            }
        }

        searchTree(this.root);

    }
    // breadth first search - поиск в ширину - level by level
    bfs(){
        const result = [];

        return result;
    }

}

const arr2 = [9, 3, 10, 2, 7, 1, 12, 6, 11, 14];
const bst = new Bst(9);

bst.insert(3);
bst.insert(10);
bst.insert(2);
bst.insert(7);
bst.insert(1);
bst.insert(12);
bst.insert(6);
bst.insert(11);
bst.insert(14);

console.log('bst', bst);
console.log('bst max', bst.max());
console.log('bst min', bst.min());
console.log('bst in order', bst.dfsInOrder());
console.log('bst pre order', bst.dfsPreOrder());
console.log('bst post order', bst.dfsPostOrder());

bst.delete(7);

console.log('bst in order', bst.dfsInOrder());