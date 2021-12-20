# Granulate Front End

Run the front end

### Update the backend URI
Edit the `vite.config.js` and update the `server.proxy.target` 
to point to the backend's URI.

```js
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
```

### Install dependencies

```
npm install
```

### Run the application in development mode
```
npm run dev
```

The application should start on `http://localhost:3000`.

If the port is already in use, Vite will try to run the app
on port `3001`, `3002` etc.