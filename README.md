## npm install in Server
1. body-parser : Returns middleware that only parses json
2. concurrently : Use currently to run both backend and frondend server.
3. express : Node.js web application framework
4. mongoose : Mongoose provides a straight-forward, schema solution to model your application data. 
5.  : automatically restarting the node application when file changes

## Create mongoURI in MongoDB Atlas and bind to Vercel 
## npm run dev
    ```
         "start": "node server.js",
        "server": "nodemon server.js",
        "client":"npm run dev --prefix client",
        "dev":"concurrently \"npm run server\" \"npm run client\""
    ```
    Use concurrently to run both server.

## build frontend part with vite-react
## Redux in frontend
use `configureStore()` . to combine reducers. 

## Redirect client proxy in Vite.config.js
1. In vite.config.js add 
```
    export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
        // string shorthand
        '/api/items': 'http://localhost:3000',
        }
        }
    })
```

## Deploy to Vercel
1. In server.js
```
    //set static folder
    app.use(express.static(path.join(__dirname,'./client/dist')))

    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'./client/dist/index.html'))
    })

```
2. Creste `vercel.json`
```
    "builds": [
      {
        "src": "./server.js",  //server file
        "use": "@vercel/node"
      },
      {
        "src": "./client/dist", //frontend file   
        "use": "@vercel/static" 
      }
    ],
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/server.js" //server file
      }
    ]
```
3. In Ternimal `npm run build`
4. In Terminal `vercel`