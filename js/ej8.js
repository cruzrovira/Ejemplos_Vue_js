Vue.component('cita',{
    template:'#cita',
    mounted: function(){
        console.log('Hola mundo..');
        this.selecionar();
    },
    data:function(){
        return {
        item :'',
        votos:0,
        items:[
            'Donde estaran los niños',
            'Esto es un texto de prueba',
            'el mejor libro del mundo es la biblia',
            'El segundo mejor es el arte da la guerra'
        ]
        }
    },
   methods:{
    selecionar:function(){
       this.item  = this.items[Math.floor( Math.random() * this.items.length)];
    } ,
    sumarVotos:function(){
        this.votos++;
    },
    restarVotos:function(){
        if(this.votos>0){
            this.votos--;
        }
        
    }
   }

});

new Vue({
    el:'.bg',
    
    
    
});