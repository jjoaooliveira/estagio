from database.database import DataBase
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from pydantic import BaseModel

class Carro(BaseModel): # modelo de dados
    id: int | None = None
    modelo: str
    cor: str
    ano: str

app: FastAPI = FastAPI() # cria nova instancia da classe do servico API
app.add_middleware(
    CORSMiddleware,
    allow_methods=['*'],
    allow_headers=['*'],
    allow_credentials=True,
    allow_origins=['http://localhost:3000']
)

database: DataBase = DataBase() # cria nova instancia da classe de conexao

@app.delete('/carro/delete/{item_id}')
async def deletedata(item_id):
    """
    Função que escuta método http DELETE
    """
    database.delete(item_id)
    return

@app.put('/carro/update')
async def putdata(carro: Carro):
    """
    Função que escuta método http PUT
    """
    database.updateData(carro)
    return carro


@app.post('/carro/create')
async def postdata(carro: Carro):
    """
    Função que escuta método http POST
    """
    database.insert(carro)
    return carro


@app.get('/carro/{item_id}')
async def getOneData(item_id):
    """
    Função que escuta o método http GET e retorna dados do carro de id = item_id
    """
    data = database.getOne(item_id)
    return {'data': [data]}


@app.get('/carro')
async def getAllData() -> dict[str, list]:
    """
    Função que escuta o método http GET e retorna dados da tabela carro
    """
    data = database.getAll()
    return {'dados': data}
        

if __name__ == '__main__':
    try:
        uvicorn.run(app=app, host='0.0.0.0', port=7777)
    except Exception as err:
        print(err)
    finally:
        print('Finanlizando seriviço...')
        database.close()
