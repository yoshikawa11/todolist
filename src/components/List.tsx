import { Item } from "./Item";
import { Todo } from "./Todo";

// 受け取るPropsの型を定義する
type Listprops = {
    todos: Todo[];
    deleteTodo: Function;
    updateTodo: Function;
};

const List: React.FC<Listprops> = ({ todos, deleteTodo, updateTodo }) => {
    // 押したTODOのidを[deleteTodo]に渡す
    const complete = (id: number) => {
        deleteTodo(id);
    };
    return (
        <div>
            {/* TODOリストを取得して[map関数]で１つ１つ取り出す
            */}
            {todos.map((todo) => {
                return (
                    // [Item]に必要なPropsを渡す
                    <Item
                        key={todo.id}
                        todo={todo}
                        complete={complete}
                        updateTodo={updateTodo}
                    />
                 );
                })}
        </div>
    );
};

export default List;