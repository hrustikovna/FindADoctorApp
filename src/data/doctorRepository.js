import {
  //useCollection,
  useFirestore
  // useDocument
} from 'vuefire'
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'

export async function getAll() {
  const doctors = []
  const querySnapshot = await getDocs(collection(useFirestore(), 'doctors'))
  querySnapshot.forEach((doc) => {
    doctors.push({ id: doc.id, ...doc.data() })
  })
  return doctors
}

export async function getById(id) {
  const docRef = doc(useFirestore(), 'doctors', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() }
  } else {
    return null
  }
}

export async function add(doctor) {
  const payload = _createDoctor(doctor)
  const docRef = await addDoc(collection(useFirestore(), 'doctors'), payload)

  return { id: docRef.id, ...docRef.data() }
}

export async function update(doctor) {
  const payload = _createDoctor(doctor)
  const docRef = doc(useFirestore(), 'doctors', doctor.id)

  await updateDoc(docRef, payload)

  return { id: doctor.id, ...payload }
}

export async function remove(id) {
  const docRef = doc(useFirestore(), 'doctors', id)

  await deleteDoc(docRef)
}

function _createDoctor(doctor) {
  const payload = {
    name: doctor.name,
    position: doctor.position,
    description: doctor.description,
    yearsOfExperience: doctor.yearsOfExperience,
    imgUrl: doctor.imgUrl
  }

  return payload
}
