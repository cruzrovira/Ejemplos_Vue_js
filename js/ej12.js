var url ="https://randomuser.me/api/?results=50";
new Vue({
    el:'.bg',
    data:{
       users:[]
    },
    created:function(){
        this.cargar();
    },
   methods:{
       cargar:function(){
            this.$http.get(url).then(function(dataUser){
                this.users= dataUser.body.results;
            });
       }
   }
    
});