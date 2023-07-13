import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css"
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img className={styles.cover} src="https://images.unsplash.com/photo-1669639070423-462483f0211b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />

            <div className={styles.profile}>
               <Avatar src="https://github.com/anavitoriagoess.png"/>
                <strong>Ana Vitoria</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={18} />
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}