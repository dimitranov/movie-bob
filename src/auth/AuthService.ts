import { FB_auth } from "../firebase/config";
import { BaseCredentials } from "../types/authTypes";

export default class AuthService {

    static Registrate({ email, password }: BaseCredentials): Promise<firebase.auth.UserCredential> {
        return FB_auth().createUserWithEmailAndPassword(email, password);
    }

    static Login({ email, password }: BaseCredentials): Promise<firebase.auth.UserCredential> {
        return FB_auth().signInWithEmailAndPassword(email, password);
    }

    static Logout(): Promise<void> {
        return FB_auth().signOut();
    }

    static getCurrentUser(): firebase.User | null {
        return FB_auth().currentUser;
    }
}
