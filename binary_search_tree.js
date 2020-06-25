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
        this.count = 0;
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

    // in-order
    // left, root, right
    dfsInOrder(){
        const result = [];

        return result;
    }

    // pre-order
    // root, left, right
    dfsPreOrder(){
        const result = [];

        return result;
    }

    // post-order
    // left, right, root
    dfsPostOrder(){
        const result = [];

        return result;
    }

    // breadth first search - поиск в ширину - level by level
    bfs(){
        const result = [];

        return result;
    }

}

const bst = new Bst();

bst.insert(100);
bst.insert(1);
bst.insert(2);
bst.insert(3);

    
console.log('bst', bst)