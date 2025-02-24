import { DndContext, useDraggable } from '@dnd-kit/core';
import { useState } from 'react';

const Drag = () => {
  const [items, setItems] = useState(['Яблоко', 'Банан', 'Черешня']);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    // Получаем индексы активного элемента и зоны, в которую он был перетащен
    const activeIndex = items.indexOf(active.id);
    const overIndex = items.indexOf(over.id);

    // Если элементы находятся на одинаковых позициях, не делаем ничего
    if (activeIndex === overIndex) {
      return;
    }

    const updatedItems = [...items];
    updatedItems.splice(activeIndex, 1); // Убираем активный элемент
    updatedItems.splice(overIndex, 0, active.id); // Вставляем на новую позицию

    setItems(updatedItems); // Обновляем порядок элементов
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col">
        {items.map((item) => (
          <DraggableItem key={item} id={item}>
            {item}
          </DraggableItem>
        ))}
      </div>
    </DndContext>
  );
};

function DraggableItem({ id, children }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id, // Уникальный идентификатор для каждого элемента
  });

  return (
    <div
      ref={setNodeRef} // Привязываем DOM-узел для перетаскиваемого элемента
      {...listeners} // Добавляем слушателей для событий drag
      {...attributes} // Добавляем атрибуты для перетаскивания
      className="p-2 cursor-grab rounded bg-teal-500 my-2 text-white"
    >
      {children}
    </div>
  );
}

export default Drag;
