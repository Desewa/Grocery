function totalprice(price,amount){
  return(price*amount)
}


$(document).ready(function(){
    $("#formOne").submit(function(event){
      event.preventDefault()
      const inputtedProduct =$("#product").val();
      const inputtedQuality=$("#quality").val();
      const inputtedAmount=$("#amount").val();
      const inputtedSeller=$("#seller").val();

      const total = totalprice(inputtedAmount, inputtedQuality);

      $("#display").append(
        "<tr>" +
          "<td>" + inputtedProduct.toUpperCase() + "</td>" +
          "<td>" + inputtedQuality + "</td>" +
          "<td>" + inputtedAmount + "</td>" + 
          "<td>" + inputtedSeller.toUpperCase() + "</td>" +
          "<td>" + total + "</td>" +
        "</tr>"
      )

      $("#product").val(" ");
      $("#quality").val(" ");
      $("#amount").val(" ");
      $("#seller").val(" ");

})
})



// Anonymous callback function
