import { collection } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const cursosRef = collection(db, 'cursos');

export const getCursos = async () => {
    const snapshot = await get(cursosRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}