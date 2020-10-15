import React from 'react';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import styles from './styles.module.sass';
function IndexPage() {
  return (
    <main>
      <div className={styles.container}>
         <Header />
         <ContentContainer/>
      </div>
    </main>
  );
}

export default IndexPage;
