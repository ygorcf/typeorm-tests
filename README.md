# typeorm-tests

Creating a structure for testing with typeorm

## Execute

### Build

```
docker build -f .\docker\Dockerfile -t typeorm-tests .
```

### Run

run:

```
docker compose -f .\docker\compose.yml up --build
```

run test:

```
docker compose -f .\docker\compose.test.yml up --build --abort-on-container-exit
```
