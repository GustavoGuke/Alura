import firestore from '@react-native-firebase/firestore';

export async function salvarPost(data) {
  console.log('salvando post', data);
  try {
    const result = await firestore().collection('posts').add(data);
    return result.id;
  } catch (error) {
    console.log('Erro add post:', error);
    return 'erro';
  }
}

export async function pegarPosts() {
  try {
    const querySnapshot = await firestore().collection('posts').get();
    let posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return posts;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function pegarPostsTempoReal(setposts) {
  const ref = firestore().collection('posts');
  const unsubscribe = ref.onSnapshot(querySnapshot => {
    const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setposts(posts);
  });
}

export async function atualizarPost(postID, data) {
  try {
    const postRef = firestore().collection('posts').doc(postID);
    await postRef.update(data);
    return 'ok';
  } catch (error) {
    console.log(error);
    return 'error';
  }
}

export async function deletarPost(postID) {
  try {
    const postRef = firestore().collection('posts').doc(postID);
    await postRef.delete();
    return 'ok';
  } catch (error) {
    console.log(error);
    return 'error';
  }
}