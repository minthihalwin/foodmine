##Lessons
1.Install development tools
2.Create Angular App
    1.Create project's folder
    2.Install @angular/cli
    3.Create App as frontend
4.Add Header
    1.Generate Component
    2.Add Html
    3.Add Css
5.List Foods
    1.Create Food Model
    2.Create data.ts
        1.Add Sample foods
    3.Add images to assets
    4.Create Home Service
    5.Create Home Component
        1.Add ts
        2.Add html
        3.Add Css
6.Search
    1.Add method to Food Service
    2.Add Search Route
    3.Show search result in Home component
    4.Generate search component
        1.Add to home component
        2.Add ts
        3.Add html
        4.Add css
7.Tags Bar
    1.Create Tag model
    2.Add sample tags to data.ts
    3.Food service
        1.Add get all tags method
        2.Add get all foods by tag method
    4.Add tags route
    5.Show tag result in Home component
        1.Add to home component
        2.Add ts
        3.Add html
        4.Add Css
8.Food Page
    1.Add method to food service
    2.Generate Food Page component
        1.Add Route
        2.Add ts
        3.Add Css
9.Cart Page
    1.Create CartItem Model
    2.Create Cart Model
    3.Generate Cart Service
    4.Add to Cart Button in Food Page
    5.Generate Cart Page Component
        1.Add Route
        2.Add ts
        3.Add html  
        4.Add Css
10.Not Found!
    1.Generate Component
        1.Add ts
        2.Add html
        3.Add Css
    2.Add to Pages
        1.Home Page
        2.Food Page
        3.Cart Page
11. Connect to Backend
    1.Create backend folder
    2.npm init
    3.npm install typescript
    4.Create tsconfig.json
    5.Create .gitignore
    6.Copy data.ts to backend/src
    7.npm install express cors
    8.Create server.ts
        1.install @types
        2.Add Apis
    9.npm install nodemon ts-node --save-dev
    10.Add urs.ts to frontend
    11.Add HttpClient module
    12.Update food service
12. Login Page
    1.Generate component
        1.Add to routes
        2.Add ts
        3. Add html
            1. Import Reactive Forms Module
        4.Add Css
    2. Add login Api
        1. Use Json
        2. Add Jsonwebtoken
        3. Test Using Postman
    3. Generate User Service
        1. Generate User model
        2. Add User subject
        3. Add Login Method
            1. Add User Urls
            2. Generate IUserLogin interface
            3. Add ngx-toastr
                1. Import Module
                2. Import BrowserAnimationsModule
                3. Add styles in angular.json
            4. Add to Header
        1. Add Local Storage methods
        2. Add Logout Method
            1. Add to Header
13. Make Components For Login Page
    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button
14. Connect Login API to MongoDB Atlas
    1. Moving Apis into routers
    2. Create .env file
    3. Create .env file
    4. Install
        1. mongoose
        2. dotenv
        3. bcryptjs
        4. jsonwebtoken
        5. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in apis