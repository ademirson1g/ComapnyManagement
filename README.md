# Company management WebApp

I have developed a web application using React for company management. 

### The web application consists of the following features:

If the user is not logged in:

<li>There is a single page with a message "This is an application for company management, please log in via Google" along with a link for Google login.</li>
<br/>

<li>If the user is logged in: There is a page displaying a list of companies.</li>
<br/>
<li>There is a page for creating a new company.</li>
<br/>
<li>There is a page for editing a company.</li>
<br/>
<li>Pagination if there are more then 8 companies on screen and search.</li>
<br/>
<li>There is a page for deleting a company.</li>
<br/>
<li>There is a page where companies are displayed on the left side and can be dragged and dropped to the right side and vice versa.</li>
<br/>
<li>There is a page that displays a large text in a truncated form with a "Show more" or "Show less".</li>

### The following libraries are used in the project:

<li>MaterialUI </li>
<br/>
<li>React Router (latest version) for routing</li>
<br/>
<li>Axios for making API requests</li>
<br/>
<li>React Redux for managing the user's login state</li>
<br/>

### Javascript

As of v0.1, CompanyManagement was built using ReactJs.

## How to start

First create a <b>.env </b> file in the root directory and add this :
```bash
VITE_REACT_APP_API_URL=http://54.80.115.47
VITE_REACT_APP_GOOGLE_CLIENT_ID="HERE WRITE YOUR OWN GOOGLE_CLIENT_ID"
```
Then run this command ```npm install```to install packages

Then run this command to start the project
```bash
npm run dev
```

## Branches
```bash
development -> used for testing
main -> the master/main branch (production)
```

## Patterns

I have decided to use the Atomic pattern.The Atomic Design pattern was chosen for several reasons. Firstly, it promotes a modular and organized approach to UI development, allowing for easier maintenance and future updates. By breaking down the UI into atoms (small building blocks), molecules (combinations of atoms), organisms (groups of molecules) the project's UI can be efficiently constructed and managed.

## Screenshots of the project
## DESKTOP VERSION
## Homepage Login Screen
![image search api](https://i.ibb.co/D8G1spW/Unknown-1.png)
## Homepage After login
![image search api](https://i.ibb.co/4Fzdfn9/Unknown-2.png)
## Add Screen
![image search api](https://i.ibb.co/jG9tWmS/3.png)
## Homepage when company is added
![image search api](https://i.ibb.co/zRqg2L5/5.png)
## Edit Company Screen
![image search api](https://i.ibb.co/s5364Vy/6.png)
## Delete Modal
![image search api](https://i.ibb.co/Nxvj1py/7.png)
## Drag and Drop before company is dragged
![image search api](https://i.ibb.co/1nqPfHS/8.png)
## Drag and Drop after company is dragged
![image search api](https://gcdnb.pbrd.co/images/mrsdP5ZrcN2X.png?o=1)
## Show More 
![image search api](https://gcdnb.pbrd.co/images/3UfPxh6pq1K2.png?o=1)
## Show Less
![image search api](https://gcdnb.pbrd.co/images/7YXW9es3HaDI.png?o=1)
## Route/Page not found
![image search api](https://gcdnb.pbrd.co/images/IbaA6vBVh5Hj.png?o=1)
