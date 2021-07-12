import api from "../api/endpoint.js";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

export default function Verification(){
    const queryString = getTokenFromUrl(window.location.search);
    const history = useHistory();
    sendToken(queryString,history)
   return (<h1>Verify your account</h1>)
}

function getTokenFromUrl(address){
const splitted= address.split("token=")
return splitted[1]

}
function sendToken(token,history){
  console.log(token);
    api
      .get("authenticate/verify/"+token)
      .then((response) => {
          swal("Your account is activated", response.data, "success").then(() => {
            history.push("/login");
          });

}).catch((error) =>{swal("Couldn't activate your account", "some error", "error").then(() => {
    history.push("/home");
  });console.log(error.response)})
}