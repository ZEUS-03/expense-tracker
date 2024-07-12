// Board.js
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CategoryList from './CategoryList';
import { CATEGORIES } from '../constants';

const Board = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-around p-8">
        {CATEGORIES.map((category) => (
          <CategoryList key={category.id} category={category} />
        ))}
      </div>
    </DndProvider>
  );
};

export default Board;
