
new Vue({
    el:'.bg',
    data:{
        nuevaTarea:null,
        updateTareaN: null,
        updateTarea: null,
        tareas:[
            {nombre:"aprender js",completo:true},
            {nombre:"aprender vue y firebase",completo:false},
            {nombre:"aprender html y css",completo:false},
            {nombre:"aprender java",completo:false},
        ]
    },
    methods:{
        guardar:function(){
            this.tareas.unshift({nombre:this.nuevaTarea,completo:false});
            this.nuevaTarea='';
            
        },
        eliminar:function(index){
            this.tareas.shift(index);
            
        },
        update:function(index){
            this.updateTareaN= index;
            this.updateTarea= this.tareas[index].nombre;
        },
        guardarUpdate:function(index){
            this.tareas[index].nombre = this.updateTarea;
            this.updateTarea= null;
            this.updateTareaN=null;
        }
    }

})