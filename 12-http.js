//we will use abstraction on top of http module that is going to be the package by the name of express 

const http =require('http');


//first parameter represents the incoming request from web browser,res is what we sending back to client from server
const server =http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    // console.log(req);
    if(req.url === '/about'){
        res.end('Welcome to our about page')
    }
    
    res.end(
        `
        <h1>Oops!</h1>
        <p>We can't find the page you are looking for</p>
        <a href="/">back home</a>
        `
    )

}

)


server.listen(5000)


//code doesnt shut down cause you want your server to up always