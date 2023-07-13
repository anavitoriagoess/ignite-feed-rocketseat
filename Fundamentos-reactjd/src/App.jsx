import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: { 
      avatarUrl: "https://github.com/anavitoriagoess.png",
      name: "Ana Vitoria", 
      role: "Front-End Developer"
    }, 
    content: [
      {type: 'paragraph', content: 'Oi, Gentee! 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-06-12 20:00:00')
  },
  {
    id: 2,
    author: { 
      avatarUrl: "https://github.com/gusstavosantana.png",
      name: "Gustavo Sant'Ana", 
      role: "Front-End Developer"
    }, 
    content: [
      {type: 'paragraph', content: 'Fala, galeraa 👋'},
      {type: 'paragraph', content: 'Finalizei um projeto super especial! Confere no link abaixo 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-06-10 20:00:00')
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

