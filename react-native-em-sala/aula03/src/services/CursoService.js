import { collection, getCursos, addDoc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

const cursosRef = collection(db, 'cursos');

export const getCursos = async () => {
    const snapshot = await getDocs(cursosRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

//adicionar um novo curso
export const adicionarCursos = async (curso) => {
    const docRef = await addDoc(cursosRef, curso);
    return docRef.id
}

//atualizar um curso
export const atualizarCurso = async (id, novosDados) => {
    const cursoRef = doc(db, 'cursos', id);
    await updateDoc(cursoRef, novosDados);
}
//deletar um curso
export const deletarCurso = async (id) => {
    const cursoRef = doc(db, 'cursos', id);
    await deleteDoc(cursoRef);
}