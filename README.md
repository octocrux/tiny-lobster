# tiny-lobster

## How to start

Install dependencies
```(bash)
yarn install
```

Start development
```(bash)
yarn dev
```

Start in production mode
```(bash)
yarn start
```

## Probe endpoints

```
curl --location --request POST 'http://localhost:3000/update/111'

curl --location -g --request GET 'http://localhost:3000/get?one=1&two=2'

curl --location --request GET 'http://localhost:3000/get-through-redirect'
```

## Logs

In production mode logs are written to a file inside the `logs/` directory.
In dev mode logs are also written to console.
