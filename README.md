0. create next-app@lates string

1. create github repo and push

echo "# string" >> README.md
git init
git add README.md or .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ilham972/string.git
git push -u origin main

2. home page and push

//Create a basic Next.js functional component template named 'Home' with an empty return statementwith a structured layout using Tailwind CSS.
// inside the return statement, create a div element with a sematic main element.
// inside the main element, add parent div. inside the parent div, add three empty child divs
// first empty child div contain a h1 tag with a placeholder text nemed 'string-app'.
// rest of the each child divs contain nextjs's links for singn-in and signup pages.
// Use 'flex', 'min-h-screen', 'items-center', and 'justify-center' for the main container.
// Inside the main container, add a div with 'flex', 'flex-col', 'gap-2', 'p-5', 'max-w-xs', 'w-full', 'dark:bg-slate-800', 'bg-slate-300', and 'rounded-lg' classes.Include a centered header with 'text-center' and 'my-4' classes, and two Link components each with 'dark:bg-slate-900', 'bg-slate-400', 'my-4', 'p-3', 'rounded-lg', and 'block' classes for sign -in and sign - up
// export the Home component.

3. create db and connect

4. create sql dir and (1d.sql,1u.sql) migration file

5. write migration file and insert to database

6. commit the initial migration

7. create scripts folder and (load-fake-data.ts, load-admin-user.ts) automation scripts file for insert the fake data into the database tables

8. let's check the page, whether is working or not with small function and tsx

9. install pg package

10. make postgress database connection for our next-app with pg package and check is it works or not with query method

11. commit the "app db connection"

12. generate 10 fake users on data base using faker package

13. pass the parameter from command line to script , and generate 5 users, now we have control

14. get lastly created fews users and generate 10 fake posts for them using for loop

15. generat fake follows

16. run doungrade migration, for fresh database, and commit to git

17. bcrypt the password for new users , and commit to git

18. to create fake admin users, create load-admin-users.ts file and create small skelaton

19. create db.ts for maintaine data base connection and create skelaton for db.ts

20. now import the getClinet() function into load-admin-users.ts and generate the one admin user via load-admin-users.ts file

21. refactor - rewrite the code , clean up the code without change the functionality
    so, refactor the load-fake-data.ts file from db.ts. and finally push

22. create post endpoint to log-in the user

23. check the log-in endpoint works or not

24. query the data base using end point for check works or not

25. refactor the code , because some time we forgot to close the client

26. add some code in login endpoint that codes will check user actually exist or not

27. check the user password correct or not by login endpoint

28. create the cookie , and allow to login as secure

29. create pulic private folder for feed page and signin page, and write skelaton layouts for that two, and check route works or not

30. now write skelaton for that two pages

31. create form component inside sigin folder

32. add functinality for the form component

33. let's check the form functionality how that is works

34. now style the form,

35. style the public layout, and push
