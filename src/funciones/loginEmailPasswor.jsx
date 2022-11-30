import firebaseApp from "../firebase/credenciales"
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"

const auth = getAuth(firebaseApp);

async function loginEmailPasword(email,password){
    signInWithEmailAndPassword(auth,email,password);
}
export default loginEmailPasword;