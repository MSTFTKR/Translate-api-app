
const axios = require('axios')
const input = require('input')


const secenekSecim = async () => {
    let category = await input.checkboxes('Kategori Seç:', ['Any', 'Custom'])
    if (category[0] == 'Custom') {
        category = await input.checkboxes('Kategori İşaretle(En Az Bir Tane):', ['Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas'])
        category = category.join()
        console.log(category)
    }

    let language = await input.checkboxes(`Dil Seç(Sadece bir tane seçiniz):cs-Czech,\n de-German,\n en-English,\n es-Spanish,\n fr-French,\n pt-Portuguese\n`, ['cs', 'de', 'en', 'es', 'fr', 'pt'])
    console.log(language)
    let flags = await input.checkboxes('Karaliste Seç', ['nsfw', 'religious', 'political', 'racist', 'sexist', 'explicit'])
    let flagC = flags.join()
    console.log(flagC)
    let format = await input.checkboxes('Formatı Seç(Max 1 adet):', ['json', 'xml', 'yaml', 'txt'])
    console.log(format)
    let type = await input.checkboxes('Tipini Seç:', ['single', 'twopart'])
    console.log(type)
    let search = await input.text('Aranan içerikle alakalı şaka için text gir(tek kelime):')
    console.log(search)
    let range = await input.text('id aralığı girin(Boş Bırakılabilir.(1-15):')
    console.log(range)
    let amount = await input.text('Şaka Sayısını Gir:')
    console.log(amount)

    let urlx = `https://v2.jokeapi.dev/joke/${category.length > 0 ? category : 'Any'}?${language.length < 1 || language[0] == 'en' ? '' : `lang=${language[0]}`}${flagC.length < 1 ? '' :`&blacklistFlags=${flagC}`}${format.length < 1 || format[0] == 'json' ? '' : `&format=${format[0]}`}${type.length < 1 || type.length == 2 ? '' : `&type=${type[0]}`}${search.length < 1||search==' '||search[0]==' ' ? '' : `&contains=${search}`}${range.length < 1||range==' ' ? '' : `&idRange=${range}`}${amount.length < 1||amount==' ' ? '' : `&amount=${amount}`}`

    return urlx

}


const jokeha = async (urlx) => {
    try {
        const keep = await axios.request({
            method: 'get',
            url: `${urlx}`,
            headers: {}
        })
        let a=[]
        if(!keep.data.jokes){
            if(!keep.data.joke){
                a.push(keep.data.setup+'  '+keep.data.delivery)
            }else{
            a.push(keep.data.joke)
            }

        }else {
        for(let i=0; i<keep.data.jokes.length;i++){
            if(!keep.data.jokes[i].joke){
                a.push(keep.data.jokes[i].setup+'  '+keep.data.jokes[i].delivery)
            }else{
            a.push(keep.data.jokes[i].joke)
              }
            }
        }

        return a
    } catch {

        throw new error('Bilgi gelmedi')
    }

}

main=async()=>{

    let keepUrl=await secenekSecim()
    let yaz= await jokeha(keepUrl)
    return yaz
}

module.exports = main ;
