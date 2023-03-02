function init(message:string):void {
  // alert("Init called");
  console.log(message);
  const messageOutputElement = document.getElementById("messageOutput");

  if (messageOutputElement) {
    messageOutputElement.innerHTML = message;
  }

}
export default {
  init: init
}
