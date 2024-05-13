class Node:
    def __init__(self, item: tuple[int, str, str, str]):
        self.id = item[0]
        self.cor = item[1]
        self.modelo = item[2]
        self.ano = item[3]
        self.next: Node | None = None

class LinkedList:
    def __init__(self, head: Node | None = None) -> None:
        self.__head = head

    def insertAtEnd(self, node: Node) -> None:
        """
        Função encarregada de adicionar um objeto Node
        @node: Objeto Node
        """
        current: Node | None = self.__head
        if current:
            while current.next:
                current = current.next
            current.next = node
        else:
            self.__head = node
    
    def insertListAtEnd(self, nodes: list[Node]) -> None:
        """
        Função encarregada de adicionar objetos Node recebidos em lista
        @nodes: Lista de objetos Node
        """
        for node in nodes:
            current = self.__head
            if current:
                while current.next:
                    current = current.next
                current.next = node
            else:
                self.__head = node

    def getAllNodes(self) -> None:
        """
        Método que realiza busca por todos os Nodes na lista e mostra na tela seus modelos
        """
        print('Lista ligada\n*', end="")
        current = self.__head
        if current:
            while current:
                print(f' -> {current.modelo}', end="")
                current = current.next
        else:
            print('Lista Vazia')

    def getNodeByValue(self, value):
        current = self.__head
        while current:
            if current.value == value:
                print('existe')
                return
            else:
                current = current.next
                continue
        print('O Valor Não Existe')