export default {
    $clickOut(el,target, edge = document.body ){
      let currentTarget=target;
      while(currentTarget){
        if(currentTarget==el) return true;
        if(currentTarget==edge) return false;
        currentTarget=currentTarget.parentNode;
      }
    }
}
