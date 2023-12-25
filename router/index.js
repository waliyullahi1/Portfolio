import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';
import { useRoute } from 'vue-router'
const route = useRoute()

const routes = [
  {
    path: "/",
    name: "landingpage",
    component: () => import("../views/landingpg.vue"),
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: () => import("../views/aboutus.vue"),
  },
  {
    path: "/card/:id",
    props: true,
    name: "landingpadw",
    component: () => import("../views/waec.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/loginpage.vue"),
  },
  {
    path: "/Register",
    name: "register",
    component: () => import("../views/Registerpage.vue"),
     
  },
  {
    path: "/Dashboard",
    name: "dashboard",
    component: () => import("../views/Homepage.vue"),
   beforeEnter: checkAuth,
  },
  {
    path: "/datapage",
    name: "datapge",
    component: () => import("../views/Datapage.vue"),
    // beforeEnter: checkAuth,
  },
  {
    path: "/airtime",
    name: "airtime",
    component: () => import("../views/Airtime.vue"),
    // beforeEnter: checkAuth,
  },
  {
    path: "/fundHistory",
    name: "fundHistory",
    component: () => import("../views/fundHistory.vue"),
    beforeEnter: checkAuth,
  },
  {
    path: "/scratchcards",
    name: "scratch",
    component: () => import("../views/scratch.vue"),
    beforeEnter: checkAuth,
  },
  
  {
    path: "/forgetpassword",
    name: "forgetpassword",
    component: () => import("../views/forgetPassword.vue"),
  },
  {
    path: "/verify/:token",
    props: true,
    name: "verify",
    component: () => import("../views/resetpassword.vue"),
     beforeEnter: verifyJWT,
  },
  {
      path: "/pin",
      name: "pin",
      component: () => import("../views/pagePin.vue"),
      beforeEnter: checkAuth,
  },
  {
      path: "/test",
      name: "test",
      component: () => import("../views/test.vue"),
  },
  {
      path:"/pagesucess",
      name:"pagesucess", 
      component : ()=>import ("../views/thankspage.vue")
   },

   {
    path:"/transactionreport",
    name:"transaction", 
    component : ()=>import ("../views/TransactionReport.vue"),
    beforeEnter: checkAuth,
 },

 {
  path:"/fund",
  name:"found", 
  component : ()=>import ("../views/fund.vue"),
  beforeEnter: checkAuth,
},

{
  path:"/profile",
  name:"profile", 
  component : ()=>import ("../views/profile.vue"),
  beforeEnter: checkAuth,
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
async function checkAuth(to, from, next) {
  try {
    // Send a request to your backend to check if the user is authenticated
    await axios.get('https://api-abanise-5a3s.vercel.app/refreshtoken', { withCredentials: true });
    next();
  } catch (error) {
    next('/login'); 
  }
}

  
async function verifyJWT(to, from, next) {
   // Accessing the token parameter
   const token = to.params.token;

   try {
    const response = await fetch('https://api-abanise-5a3s.vercel.app/valid', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
            token: token
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData, 'fffffffff');
        next({ name: 'login' });
        throw new Error(errorData.message);
    }
    const data = await response.json();
    
  console.log(data.message)
    next();
} catch (error) {
    console.log(error);
    next({ name: 'login' });
}

}



export default router
