import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AddTodo from './components/AddTodo';
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

export default function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.block}>
      <DateHead date={today} />
      {todos.length === 0 ? (
        <Empty />
      ) : (
        <TodoList todos={todos} onToggle={onToggle} />
      )}
      <AddTodo onInsert={onInsert} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});
