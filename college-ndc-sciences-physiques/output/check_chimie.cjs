const {chromium}=require('C:/Users/gonne/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const path=require('path');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const url='file:///'+path.resolve(process.argv[2] || 'output/site-chimie/qcm/3e/chimie-3d.html').replaceAll('\\','/');
 await page.goto(url);
 const expected=[1,0,2,0,1,2,0,1,2,1,0,2,1,0,2,1,0,2,1,0];
 if(await page.evaluate(()=>questions.length)!==20)throw Error('Question count');
 for(let i=0;i<20;i++){
   if(await page.locator('.answer-btn').count()!==3)throw Error('Answer count');
   if([8,15,17,18].includes(i)){
     await page.locator('#pictogramme').evaluate(img=>img.decode());
     for(const width of [1280,375]){
       await page.setViewportSize({width,height:950});
       await page.screenshot({path:`output/qcm-${i+1}-${width}.png`,fullPage:true});
       if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Overflow');
     }
   }
   const correct=await page.evaluate(i=>questions[i].correct,i);
   if(correct!==expected[i])throw Error('Wrong answer key');
   await page.locator('.answer-btn').nth(i===0?0:correct).click();
   if(await page.locator('.answer-btn:disabled').count()!==3)throw Error('Multiple answer possible');
   await page.locator('#nextBtn').click();
 }
 if(!(await page.locator('.result-score').innerText()).includes('19 / 20'))throw Error('Score');
 await page.locator('#remediationBtn').click();
 if(!(await page.locator('#progress').innerText()).includes('1 sur 1'))throw Error('Remediation');
 await page.locator('.answer-btn').nth(1).click();await page.locator('#nextBtn').click();
 if(await page.locator('#remediationBtn').count())throw Error('Remediation not complete');
 await page.locator('#restartBtn').click();
 await page.locator('#question').waitFor();
 if(!(await page.locator('#progress').innerText()).includes('1 sur 20'))throw Error('Restart');
 if(errors.length)throw Error(errors.join('\n'));
 await browser.close();console.log('PASS: 20 questions, answer key, 4 images at desktop/mobile sizes, score, correction, remediation, restart, no JS errors.');
})().catch(e=>{console.error(e);process.exit(1)});
