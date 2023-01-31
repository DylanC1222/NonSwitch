import { Container, ListItem, ListItemText } from '@mui/material';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const list = [
  { id: 1, name: 'A' },
  { id: 2, name: 'D' },
  { id: 3, name: 'C' },
];

export default function TodoList() {
  return (
    <>
      <h1>Proof</h1>{' '}
      <DragDropContext>
        <Droppable droppableId="droppable">
          {() => {
            <Container>
              {list.map((item, idx) => {
                <Draggable draggableId={item.id} index={idx}>
                  {() => {
                    <ListItem>
                      <ListItemText>{item.name}</ListItemText>
                    </ListItem>;
                  }}
                </Draggable>;
              })}
            </Container>;
          }}
        </Droppable>
      </DragDropContext>
    </>
  );
}

// Three sections: Served, On the block, Mise en Place
