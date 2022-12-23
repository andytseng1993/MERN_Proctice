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
1. Middleware: Middleware extends the store's abilities, and lets you write async logic that interacts with the store.
2. Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.
3. use `configureStore()` . to combine reducers.   
// The thunk middleware was automatically added.   
[redux-thunk]https://github.com/reduxjs/redux-thunk
```
  const store = configureStore({
    reducer: { //same as combineReducers
      something: someReducer
      otherthing: otherReducer
    }
  })
```
4. using thunk, then dispatch an action after an action. E.g. in addItem action, do axios then dispatch an action and return res.data to payload . 

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