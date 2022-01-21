import { test, expect } from '@playwright/test';


test.describe.parallel('suite', () => {test('Navigate to BMS', async ({ page }) => {
 

  await page.goto('https://bmsdev.dev.kaseya.net/Login.aspx');

  
 
  await page.fill('input[name="ctl00$MainContent$txtUserID"]', 'gadmin');
  
  await page.click('input[name="ctl00$MainContent$txtPassword"]');

  await page.fill('input[name="ctl00$MainContent$txtPassword"]', 'admin123');

  await page.click('input[name="ctl00$MainContent$txtCompany"]');

  await page.fill('input[name="ctl00$MainContent$txtCompany"]', 'K1Demo');

  await page.click('text=Log In');


  await page.click('text=Admin');


  await expect(page.locator('#ctl00_phTitle_lblTitle')).toHaveText('Administration Dashboard')



  await page.waitForSelector('xpath=//*[@id="aspnetForm"]/div[6]/div[1]/div/aside/div/section/ul/li[2]/a')
  const el = await page.$('xpath=//*[@id="aspnetForm"]/div[6]/div[1]/div/aside/div/section/ul/li[2]/a');
  await el.click()


  await page.waitForSelector('text=Company Settings')
  await page.click('text=Company Settings');


  



  await page.click('#ctl00_phContent_lnkItComplete');
 await page.waitForURL('https://bmsdev.dev.kaseya.net/Administration/CompanySettings.aspx')

 
 await page.evaluate(e=>{
   document.querySelector('#ctl00_phContent_chkItcToggle').click()
 })

  await page.fill('input[type="text"]', 'alexqa');
  
  await page.press('input[type="text"]', 'CapsLock');
 
  await page.press('input[type="text"]', 'Tab');

  await page.press('input[type="password"]', 'CapsLock');

  await page.fill('input[type="password"]', 'Qwerty&77');
  
  await page.click('#organizationName');
  
  await page.fill('#organizationName', 'alexqac');



  await page.click('text=Log In');
 



  await page.waitForNavigation()
await page.waitForSelector('#ctl00_MainHeaderNavigationBar_CurrentProfileBox1_lblUserFirstName',{timeout:10_000})
 await page.evaluate(e=>{
  document.querySelector('#ctl00_MainHeaderNavigationBar_CurrentProfileBox1_lblUserFirstName').click()
})
  await page.click('#ctl00_MainHeaderNavigationBar_CurrentProfileBox1_btnEnableLoginWithITC')


 await page.waitForSelector('#ctl00_MainHeaderNavigationBar_CurrentProfileBox1_iconProfileAnon')

  await page.click('#ctl00_MainHeaderNavigationBar_CurrentProfileBox1_iconProfileAnon')
  await page.waitForSelector('#ctl00_MainHeaderNavigationBar_CurrentProfileBox1_btnDisableLoginWithITC')

  await page.click('#ctl00_MainHeaderNavigationBar_CurrentProfileBox1_btnDisableLoginWithITC')

  await page.click('text=Yes')


 
  await page.click('text=Admin');
 
  await page.waitForSelector('xpath=//*[@id="aspnetForm"]/div[6]/div[1]/div/aside/div/section/ul/li[2]/a')
  const el3 = await page.$('xpath=//*[@id="aspnetForm"]/div[6]/div[1]/div/aside/div/section/ul/li[2]/a');
  await el3.click()
  
  await page.click('text=Company Settings');
 
  await page.click('#ctl00_phContent_lnkItComplete');
 await page.waitForURL('https://bmsdev.dev.kaseya.net/Administration/CompanySettings.aspx')

 await page.evaluate(e=>{
   document.querySelector('#ctl00_phContent_chkItcToggle').click()
 })

await page.click('#ctl00_MainHeaderNavigationBar_CurrentProfileBox1_iconProfileAnon')
await page.screenshot({ path: `example-1.png` });
 await  page.click('text=Log out')

})

test('runs in parallel 2', async ({ page }) => { await page.goto('https://google.com'); });

});