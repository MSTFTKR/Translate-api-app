const translate=require('./api/translated')
const makeAjoke=require('./api/makeAjoke')
const input=require('input')

main=async()=>{
    let control=0;
    do {
 
        const sakaYap =await input.checkboxes('Sadece Bir işlem seçiniz:',['Şaka Getir(en)','Turkçe Çevirili Şaka Getir','Çık'])
        if(sakaYap==''){
            console.log('Lütfen bir seçim yapın')
        }else if(sakaYap.length>1){
            console.log('Lütfen sadece bir seçim yapın')
        }
        else if(sakaYap=='Şaka Getir(en)'){
             await sakaEn()
        }else if(sakaYap=='Turkçe Çevirili Şaka Getir'){
             await CeviriSaka()
        }else if(sakaYap=='Çık'){
            console.log('Çıkılıyor...')
            control=1;
        }

    } while (control!=1);

    
}

const sakaEn=async()=>{
    const a=await makeAjoke()
    console.log(a)
}

const CeviriSaka=async()=>{
    const a=await makeAjoke()
  for await (const element of a) {
        let b=await translate(element)
        console.log(element)
        
        console.log('-----------------------------')       
        console.log(b)       
        console.log('****************************************************************')       
    
    }
}
// CeviriSaka()

main()