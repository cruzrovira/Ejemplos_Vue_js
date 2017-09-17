Vue.filter('normal',function(value,masculino){
    var sexo = masculino? 'Sr. ':'Sra. ';
    return sexo +value.split(' ').reverse().join(' , ');
    
});
new Vue({
    el:'.bg',
    data:{
        nombre:'Oscar Rovira'
    }
    
});