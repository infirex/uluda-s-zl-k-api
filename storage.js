class Storage{
    static getAllSearchedFromStorage(){
        let titles;
        if(localStorage.getItem("titles")==null){
            titles=[];
        }else{
            titles=JSON.parse(localStorage.getItem("titles"));
        }

        return titles;
    }
    static addAllSearchedToStorage(title){
        let titles=this.getAllSearchedFromStorage();

        if(titles.indexOf(title)==-1){
            titles.push(title);
        }
        localStorage.setItem("titles",JSON.stringify(titles));
    }

    static clearAllSearchedFromStorage(){
        localStorage.removeItem("titles");
    }
}