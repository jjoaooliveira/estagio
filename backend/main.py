from database.database import DataBase
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app: FastAPI = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_methods=['*'],
    allow_headers=['*'],
    allow_credentials=True,
    allow_origins=['http://localhost:3000']
)

@app.post('')
async def postdata():
    return

@app.get('/teste')
async def getalldata() -> dict[str, list]:
    """
    Retorna todos os dados de carros do banco
    """
    database: DataBase = DataBase()
    database.cursor.execute(
        """
        SELECT * FROM carro;
        """
    )
    data: list = database.cursor.fetchall()
    templist: list = list()
    for item in data:
        templist.append({'id': item[0], 'modelo': item[2], 'cor': item[3]})
        
    return {'dados': templist}

    """
    CRUD
    """

if __name__ == '__main__':
    uvicorn.run(app=app, host='0.0.0.0', port=7777)
