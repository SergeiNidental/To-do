# To-do list

![Screenshot of the To-do list](Src_code/Src/Main_site_theme.png)

## 1. Settings so that run the project
 ### 1.1 It is necessary to add some plugins so that to run the project:  
    "clean-webpack-plugin": "^4.0.0" - `npm i -D clean-webpack-plugin`   
    "cross-env": "^7.0.3" - `npm i -D cross-env`  
    "css-loader": "^6.8.1" - `npm i -D css-loader`  
    "file-loader": "^6.2.0" - `npm i -D file-loader`    
    "html-webpack-plugin": "^5.5.3" - `npm i -D html-webpack-plugin`  
    "mini-css-extract-plugin": "^2.7.6" - `npm i -D mini-css-extract-plugin`  
    "style-loader": "^3.3.3" - `npm i -D style-loader`  
    "terser-webpack-plugin": "^5.3.9" - `npm i -D terser-webpack-plugin`  
    "webpack": "^5.88.2" - `npm i -D webpack`  
    "webpack-cli": "^5.1.4" - `npm i -D webpack-cli`  
    "webpack-dev-server": "^4.15.1" - `npm i -D webpack-dev-server`  

 ### 2.2 In package.json it is necessary to add some scripts   
    "dev": "cross-env NODE_ENV=development webpack --mode development",    
    "build": "cross-env NODE_ENV=production webpack --mode production",   
    "start": "cross-env NODE_ENV=development webpack-dev-server --mode development --open"   

 ##  2. Ways of compiling the project
     There are 3 ways of compiling the project:
     `npm run dev` - Webpack will compile the project for development
     `npm run build` - Webpack will compile the project for production
     `npm run start` - Webpack will compile the project using the Live Server
