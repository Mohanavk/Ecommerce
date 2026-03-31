import{test,expect} from '@playwright/test';
import{LoginPage} from '../pages/LoginPage';
import loginData from  '../TestData/login.json';

/* let url ='https://rahulshettyacademy.com/client/';
let email= "komanapallimv11@gmail.com";
let password ="Testing@1234";
let incorrectPassword="Test"; */

let loginPage: LoginPage;

test.beforeEach(async({page})=>{

    loginPage = new LoginPage(page);
    await loginPage.launchURL(loginData.url)
})

test('test the valid login functionality',async({page})=>{


    await loginPage.loginIntoApplication(loginData.email,loginData.password);
    await expect(loginPage.signOutButton).toBeVisible();

})

test('test invalid login',async({page})=>{

    await loginPage.invalidLogin(loginData.email,loginData.incorrectPassword);
    await expect(loginPage.errorMessage).toHaveText("Incorrect email or password.")
})
