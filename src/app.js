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