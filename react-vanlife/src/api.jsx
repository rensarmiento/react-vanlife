// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    getDocs,
    query, 
    where,
} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCLjrgDPvrfrUv_aGWVLUspQRrMAqE0sXI",
  authDomain: "react-vanlife-b2858.firebaseapp.com",
  projectId: "react-vanlife-b2858",
  storageBucket: "react-vanlife-b2858.appspot.com",
  messagingSenderId: "757731728833",
  appId: "1:757731728833:web:d3dcafd294b17f5ad4e340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Refactoring the fetching functions below
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
    // console.log(vans)
}

export async function getVan(id) {
    const docRef = doc(db,"vans", id)
    const snapshot = await getDoc(docRef)
    return snapshot.data()
}  

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}











// export async function getVans() {
//     const res = await fetch("/api/vans")
//     if(!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText:res.statusText,
//             status:res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans 
// }

// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}