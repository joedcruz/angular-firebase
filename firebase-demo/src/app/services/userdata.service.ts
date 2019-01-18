import { UserData } from './../Interfaces/userdata';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class UserDataService {
    
    constructor(private http: HttpClient, private fireStore:AngularFirestore) {}

    getUsers(){
        // return this.fireStore.collection('users', ref => ref.orderBy('username')).valueChanges();
        return this.fireStore.collection('users').valueChanges();
        // return this.fireStore.collection('users').snapshotChanges();
    }

    addUser(user) { 
        console.log('adduser');
        this.fireStore.collection('users').add(user).then((docRef) => {
            this.fireStore.collection('users').doc(docRef.id).update({
                id: docRef.id
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    updateUser(userdata) {
        console.log('update user service'); 
        this.fireStore.collection('users').doc(userdata.uid).update(userdata)
            .then(() => {
                console.log('updated');
            })
    }

    deleteUser(user) {
        console.log('delete user service');
        this.fireStore.collection('users').doc(user.id).delete()
            .then(() => {
                console.log('deleted');
            })
    }
}