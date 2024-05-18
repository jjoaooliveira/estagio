import psycopg2
from configparser import ConfigParser

class DataBase:
    """
    Classe de conexão com o banco de dados
    """
    __filepath='backend\\database\\database.ini'
    __section='postgresql'

    def __init__(self) -> None:
        parser = ConfigParser()
        parser.read(self.__filepath)

        # get section, default to postgresql
        self.__config = {}
        if parser.has_section(self.__section):
            params = parser.items(self.__section)

            for param in params:
                self.__config[param[0]] = param[1]

            self.conn = psycopg2.connect(**self.__config)
            print('Connected to the PostgreSQL server.')
        else:
            raise Exception('Section {0} not found in the {1} file'.format(self.__section, self.__filepath))
            

    def close(self) -> None:
        """
        Método para fechar a conexão
        """
        self.conn.close()
        return


    def updateData(self, model) -> None:
        """
        Método que executa insctrução sql 'UPDATE'
        a partir de um OBJETO recebido como parâmetro 
        """
        with self.conn as connection:
            with connection.cursor() as cur:
                cur.execute(
                    """
                    UPDATE carro
                    set modelo = %s, cor = %s, ano = %s
                    WHERE id = %s;
                    """,
                    (model.modelo, model.cor, model.ano, model.id)
                )
        return


    def getAll(self) -> list:
        """
        Método que executa insctrução sql 'SELECT'
        retornando todos os dados da tabela carro 
        """
        with self.conn as connection:
            with connection.cursor() as cur:
                cur.execute(
                    """
                    SELECT * FROM carro;
                    """
                )
                data: list = cur.fetchall()

                templist: list = list()
                for item in data:
                    templist.append({
                        'id': item[0],
                        'modelo': item[2], 
                        'cor': item[1], 
                        'ano': item[3]
                    })
                    
        return templist


    def getOne(self, dataId) -> dict:
        """
        Método que executa insctrução sql 'SELECT...WHERE'
        a partir de um ID recebido como parâmetro 
        """

        with self.conn as connection:
            with connection.cursor() as cur:
                cur.execute(
                    """
                    SELECT * FROM carro
                    WHERE id = %s;
                    """,
                    (dataId)
                )
                data: tuple = cur.fetchone()
                
                dataDict: dict = dict()
                dataDict['id'] = data[0]
                dataDict['cor'] = data[1]
                dataDict['modelo'] = data[2]
                dataDict['ano'] = data[3]

        return dataDict
    

    def insert(self, model) -> None:
        """
        Método que executa insctrução sql 'INSERT'
        a partir de um OBJETO recebido como parâmetro 
        """
        with self.conn as connection:
            with connection.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO carro(modelo, cor, ano) 
                    VALUES(%s, %s, %s);
                    """,
                    (model.modelo, model.cor, model.ano)
                )
        return
    
    
    def delete(self, id) -> None:
        """
        Método que executa insctrução sql 'DELETE...WHERE'
        a partir de um ID recebido como parâmetro  
        """
        with self.conn as connection:
            with connection.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM carro
                    WHERE id = %s;
                    """,
                    (id)
                )
        return


if __name__ == '__main__':
    database: DataBase = DataBase()

    with database.conn as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT * FROM carro;
                """
            )
            print(cur.fetchall())
    database.close()
