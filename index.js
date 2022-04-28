function showMessage(){
  const search = document.getElementById("search");

  if(search.value !== ""){
    const message = `La busqueda de ${search.value} no se pudo realizar ya que este no es el verdadero Google 😫`;
     alert(message);
  }else {
    const message = `La busqueda no se pudo realizar ya que este no es el verdadero Google 😫`;
     alert(message);
  }

}
