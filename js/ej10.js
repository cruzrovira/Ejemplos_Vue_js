
new Vue({
    el:'.bg',
    data:{
        show:true
    },
    methods:{
        mostrar:function(){
            this.show = this.show ? false:true;
        }
    }
    
});