import useTodoStore from "../store/todoStore";
import { Box, Text } from "@chakra-ui/react";

export default function SummaryTodos() {
    const todos = useTodoStore((state) => state.todos);
    const count = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;

    return (
        <Box width="md" rounded='xl' border='1px'>
            <Text aria-label='todo-count-total'>
                Total : {count}
            </Text>
            <Text aria-label='todo-count-done'>
                Done : {doneCount}
            </Text>
        </Box>
    )
}