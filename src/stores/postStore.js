import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', () => {

  let postData = ref([

    {
      id: 1,
      title: "Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой.",
      comments: [
        { id: 1, text: "Самый яркий комментарий в этом посте" },
        { id: 2, text: "Один из бессмысленный комментарий в этом посте" }
      ]
    },
    {
      id: 2,
      title: "Краткосрочное вымышленное преломление может выполнять особую роль в   пространстве главной роли игрока ",
      comments: [
        { id: 1, text: "Очень научно и непонятно" },
      ]
    }

  ])

  // работает, если подключить стор в любой компонент
  console.log(postData.value)




  // Добавление поста
  const addPost = (value) => {
    if (value !== '') {
      let new_post = {
        id: Date.now(),
        title: value,
        comments: []
      }

      postData.value.push(new_post)
    }
  }


  // удаление поста
  const deletePost = (id) => {
    let index = postData.value.findIndex(elem => elem.id === id)
    if (index !== -1) {
      postData.value.splice(index, 1);
    }
  }


  // Добавление комментария
  const addComment = (id, value) => {

    const post = postData.value.find(post => post.id === id);

    if (post && value !== '') {

      let new_comment = {
        id: Date.now(),
        text: value
      }

      post.comments.push(new_comment);
    }
  }


  // удаление комментария
  const deleteComment = (postId, commentId) => {
    const post = postData.value.find(post => post.id === postId);
    
  }


  return { postData, addPost, deletePost, addComment, deleteComment }
})
