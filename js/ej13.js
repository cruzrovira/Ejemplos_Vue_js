

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCuYHwGDZLVP5zjpynZ6CFtkHcmLI0c-xw",
    authDomain: "vuefirebase-989ed.firebaseapp.com",
    databaseURL: "https://vuefirebase-989ed.firebaseio.com",
    projectId: "vuefirebase-989ed",
    storageBucket: "",
    messagingSenderId: "124717551346"
  };
  firebase.initializeApp(config);
  var db = firebase.database();

var vm = new Vue({
    el:'.bg',
    mounted:function(){
        db.ref('tareas/').on('value',function(snapshot){
            var tareasFr= snapshot.val();
            vm.tareas=[];
            for(item in tareasFr){
                vm.tareas.unshift({
                    key:item,
                    nombre:tareasFr[item].nombre,
                    completo:tareasFr[item].completo
                });  
                
            }
        });
    },
    data:{
        nuevaTarea:null,
        updateTareaN: null,
        updateTarea: null,
        tareas:[]
    },
    methods:{
        guardar:function(){
            db.ref('tareas/').push({
                nombre:this.nuevaTarea,
                completo:false
            });
            this.nuevaTarea='';
            
        },
        eliminar:function(index){
            db.ref('tareas/'+this.tareas[index].key).remove();
            
            
        },
        update:function(index){
            this.updateTareaN= index;
            this.updateTarea= this.tareas[index].nombre;
        },
        guardarUpdate:function(index){
            //this.tareas[index].nombre = this.updateTarea;
            db.ref('tareas/'+this.tareas[index].key).update({nombre:this.updateTarea});
            this.updateTarea= null;
            this.updateTareaN=null;
        },
        guardarEstadoTarea:function(index){
            db.ref('tareas/'+this.tareas[index].key).update({completo:!this.tareas[index].completo});
        }

    }

})