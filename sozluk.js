//my key erdemahme239282 
class Sozluk{
    async entryleriGetir(baslik){
        let link=`http://www.uludagsozluk.com/api/?a=erdemahme239282&n=baslik&b=${baslik}&ls=0&le=50&desc=1`;

        const results=await fetch(link);

        const entries=await results.json();

        return entries;

    }

}