# Granulate Backend

You can run the backend either through docker or locally.

### Run through docker
Simply run the following in your terminal:
```bash
cd backend
docker build -t granulate_frontend_exercise .
docker run -p80:80 --rm -it granulate_frontend_exercise
```

### Run locally
Running it locally requires Python 3.7+ and running the following in your terminal:
```bash
pip3 install fastapi uvicorn

cd backend
sudo uvicorn main:app --reload --port 80
```

## Exposed API
The backend exposes the following API. Feel free to play around with it through `fastapi` console by running the backend and entering [http://localhost/docs](http://localhost/docs).

### List services
#### Exposes API:
`http://localhost/api/v1/services`

#### Example request
`http://localhost/api/v1/services`

#### Example return value
```json
[
    "service1",
    "services2"
]
```

### List instances
#### Exposes API
`http://localhost/api/v1/instances/{service-id}`

#### Example request
```http://localhost/api/v1/instances/service1```

#### Example return value
```json
{
    "instance1": "info on instance 1",
    "instance2": "info on instance 2",
    "instance3": "info on instance 3"
}
```
