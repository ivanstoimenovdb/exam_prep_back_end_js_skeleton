# exam_prep_back_end_js_skeleton
Skeleton for exam - js back-end.


## TODOs.
##  1. Prepare enviremont.
-[X] Initialize project.
-[X] Make module used enviremont.
-[X] Add source (src) table.
-[X] Make dev script.
-[X] Make debug script.
-[X] Add resources.

##  2. Express.
- [X] Install express `npm i express`.
- [X] Init express server.
- [X] Setup static middlewear.
- [X] Body parser.
- [X] Add controllers.
- [X] Add route file.
- [X] Add error controller.
- [X] Add json parser.

## 3. Handlebars.
- [X] Install handlebars `npm i express-handlebars`.
- [X] Config handlebars engine.
- [X] Set/Use handlebars engine.
- [X] Set views folder.
- [X] Add home view.
- [X] Render home view without layout `res.render('home', { layout: false });`. 
- [X] Fix asset paths - delete/add uneccessary/neccessary folders from paths.
- [x] Add layouts and remove `{ layout: false }`.
- [X] Add partials.
- [X] Config handlebars to work with mongoose documents `runtimeOptions: { allowProtoPropertiesByDefault : true,
                                                                           allowProtoMethodsByDefault: true, }`

## 4. Database.
- [X] Install mongoose `npm i mongoose`.
- [X] Connect to DB.
- [X] Add error handling on connect.
- [X] Add simple user model.

## 5. Register.
- [X] Fix navigation links.
- [X] Add user controller.
- [X] Create register view.
- [X] Render register view.
- [X] Modify register form.
- [X] Create post route for register.
- [X] Redirect successfull register.
- [X] Install bcrypt `npm i bcrypt`. 
- [X] Hash password before safe.
- [X] BONUS: Check if user exists.

## 6. Login.
- [X] Add login view.
- [X] Creat get login action.
- [X] Fix login form. 
- [X] Add post login action.
- [X] Validate is user exists.
- [X] Validate password. 
- [X] Install jsonwebtoken `npm i jsonwebtoken`
- [X] Generate token.
- [X] Call userSevice from userController.
- [X] Send token as cookie.
- [X] Redirect to home page.
- [X] Bonus: Move secret to config file.
- [X] Auto login on register.

## 7. Logout.
- [X] Add logout action.
- [X] Redirect to home page.

## 8. Authentication.
- [X] Install cookie parser - `npm i cookie-parser`.
- [X] Create auth middleware.
    - [X] Allow if guest (no token);
    - [X] Verify token (clear session if invalid)
    - [X] Attach decoded token to req.user (if token is valid).
- [X] Use middleware.
- [ ]


## 9. Authorization.
- [X] Create isAuth middleware.
- [X] Create isGuest middleware.
- [X] Add route guards.

## 10. Dynamic Content.
## 11. Error handling and validation.
- [ ] Check repeat password.

## Bonus.
-[X] Add env variable for debuggin;
-[ ] Use Async jwt;