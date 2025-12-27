# Product-Store
Following a tutorial to create a simple Product Store where I can do basic CRUD capabilities. [source](https://www.youtube.com/watch?v=MDZC8VDZnV8)

**Features:**
- Add product
- Delete product
- View product
- Update product

**Tech Stack:**
- Vite-React (JS) with ChakraUI@2
- Express.JS@4
- MongoDB
- Render (for deployment)

# How to run?
1. Clone the repository.
2. Setup the .env file add `MONGO_URI` and `PORT`.
3. Run the build command `npm run build` on the terminal.
4. Rune the start command `npm run start` on the terminal.

# What I learned from following this tutorial?
- I learned how to connect to MongoDB and create models and data using `mongoose`.
- I learned how to use ChakraUI to quickly create creative and seamless designs.
- I learned how to deploy a web-app with GitHub and Render.
- I learned another way to structure my backend folders to easily navigate and promote modularity.


# Issues I experienced while following the tutorial.
- When installing ChakraUI I had the wrong version of package, hence it was difficult to follow the tutorial since it was published ages ago.
  - **Solution**: Used the older version `chakra-ui@2`
- Experienced an issue with deployment. I can't set the `NODE_ENV` because of OS Compatibility issues and using the `set` command adds leading white spaces which causes `PATH error`
  - **Solution**: Installed and used `cross-env` package.
