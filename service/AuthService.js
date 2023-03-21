import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./FirebaseService";

export async function register(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        // как отлавливать и выводить ошибку о том что пользователь уже зарегался?
    }
}

export async function login(email, password) {
    try {
        signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        // тут тоже нужно отлавливать что он ещё не зареган
        // хз как работает логин и регистрация вообще, как это запоминается и тд
    }
}

export function onAuthChanged(callback) {
    onAuthStateChanged(auth, callback);
    // хз зачем это
}
