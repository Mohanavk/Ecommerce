import{Locator,Page} from "@playwright/test";

export class LoginPage{

    readonly page:Page;
    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly loginButton : Locator;
    readonly errorMessage : Locator;
    readonly signOutButton : Locator;

    constructor(page:Page)
    {
        this.page= page;
        this.usernameInput=this.page.locator('#userEmail');
        this.passwordInput=this.page.locator('#userPassword');
        this.loginButton=this.page.locator('#login');
        this.errorMessage=this.page.locator('#toast-container');
        this.signOutButton=this.page.getByRole('button',{name:'Sign Out'});
        
    }
   
    async launchURL(url:string){

        await this.page.goto(url);
    }
    
    async loginIntoApplication(username:string,password:string)
    {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async invalidLogin(username:string,incorrectPassword:string)
    {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(incorrectPassword);
        await this.loginButton.click();
    }
}