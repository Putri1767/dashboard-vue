import { createRouter, createWebHistory } from "vue-router";
import dashboardApp from '../master/dashboard-app'
import pelamar from '../pages/pelamar'
import lowongan from '../pages/lowongan'
import letter from '../pages/letter'
import letters from '../pages/letters'
import invoice from '../pages/invoice'
import bank from '../pages/bank'
import team from '../pages/team'
import contact from '../pages/contact'




const routes = [
  {
    name: 'dashboard-app',
    component: dashboardApp,
    path: '/',
    children: [
            {
        name: "pelamar",
        component: pelamar, 
        path: "/pelamar",
      },
                 {
        name: "lowongan",
        component: lowongan, 
        path: "/lowongan",
      },
      {
        name: "letter",
        component: letter, 
        path: "/letter",
      },
      {
        name: "letters",
        component: letters, 
        path: "/letters",
      },
      {
        name: "invoice",
        component: invoice, 
        path: "/invoice",
      },
      {
        name: "bank",
        component: bank, 
        path: "/bank",
      },
      {
        name: "team",
        component: team, 
        path: "/team",
      },
      {
        name: "contact",
        component: contact, 
        path: "/contact",
      },
    ]
  }
];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}