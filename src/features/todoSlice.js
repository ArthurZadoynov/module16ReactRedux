import { createSlice } from '@reduxjs/toolkit';


// Мы импортируем функцию createSlice из библиотеки @reduxjs/toolkit.
// Эта функция упрощает создание редьюсеров и действий в Redux, позволяя
// нам описывать состояние и логику изменения состояния в одном месте.

const todoSlice = createSlice({

  
  // Здесь мы объявляем константу todoSlice, которая будет хранить объект, 
  // созданный функцией createSlice. Этот объект содержит информацию о состоянии, 
  // редьюсерах и действиях для нашего среза (в данном случае, для задач).
  name: 'todos',
  // Мы задаем имя среза как 'todos'. Это имя используется для идентификации 
  // среза в Redux DevTools и может быть полезно для отладки.
  initialState: [],
  // Мы задаем начальное состояние нашего среза как пустой массив []. 
  // Это означает, что в начале у нас нет ни одной задачи (todo).
  reducers: {
    
    addTodo: (state, action) => {
    // Мы объявляем редьюсер addTodo, который принимает два параметра: 
    // state (текущее состояние) и action (действие, которое вызвало изменение состояния). 
    // Этот редьюсер будет добавлять новую задачу в массив задач.
      state.push(action.payload);
  
      // Внутри редьюсера мы используем метод push, чтобы добавить новую задачу в массив state. 
      // - action.payload содержит данные о задаче, которую мы хотим добавить. 
      // Это может быть объект с информацией о задаче (например, текст задачи и её идентификатор).
    },

    removeTodo: (state, action) => {
    // Мы объявляем редьюсер removeTodo, который также принимает два параметра: state и action.
    // - Этот редьюсер будет удалять задачу из массива задач.

      return state.filter(todo => todo.id !== action.payload);
    // Внутри редьюсера мы используем метод filter, чтобы создать новый массив, содержащий только те задачи, идентификаторы которых не совпадают с идентификатором задачи, которую мы хотим удалить.
    // - action.payload здесь содержит идентификатор задачи, которую нужно удалить.
    },

    toggleTodo: (state, action) => {
       // Мы объявляем редьюсер toggleTodo, который также принимает два параметра: state и action.
       // - Этот редьюсер будет отмечать выполненную задачу.
      return state.map((todo) => {if (todo.id === action.payload)
         return {
          ...todo,
          completed: !todo.completed,
        }
        return todo
      }
    )
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
// Мы экспортируем действия, которые были созданы на основе наших редьюсеров. 
// Эти действия можно использовать в других частях приложения для изменения состояния.
export default todoSlice.reducer;
// Мы экспортируем редьюсер по умолчанию из нашего среза. 
// Это позволяет подключить его к Redux store и управлять состоянием задач в приложении.

// Этот код создает срез состояния для управления задачами (todos) в приложении. 
// Он включает начальное состояние, редьюсеры для добавления и удаления задач, 
// а также экспортирует соответствующие действия и редьюсер для использования в других частях приложения.