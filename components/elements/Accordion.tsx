import React from 'react';
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  Button,
  Badge,
  Chip
} from '@heroui/react';
import { HiChevronDown, HiPlus } from 'react-icons/hi2';
import Paragraph from './Paragraph';

// Sample data for quizzes
const quizzes = [
  { id: 1, name: 'Quiz 1', due: 'Feb 15, 2023', max: 20, status: 'graded' },
  { id: 2, name: 'Quiz 2', due: 'Mar 1, 2023', max: 20, status: 'graded' },
  { id: 3, name: 'Quiz 3', due: 'Mar 15, 2023', max: 20, status: 'pending' },
  { id: 4, name: 'Quiz 4', due: 'Apr 1, 2023', max: 20, status: 'not-started' },
];

// Mapping status to badge variants and labels
const statusConfig: { [key in typeof quizzes[number]['status']]: { variant: string; label: string; } } = {
  graded: { variant: 'default', label: 'Graded' },
  pending: { variant: 'warning', label: 'Pending' },
  'not-started': { variant: 'secondary', label: 'Not Started' },
};

export const QuizzesCategoryAccordion= ()=> {
  return (
    <Card className="category-card bordered border-[2px] border-l-[4px] border-l-blue-600 rounded-[8px]">
      <Accordion selectionMode="single" defaultSelectedKeys={["quizzes"]} isCompact>
        <AccordionItem
          value="quizzes"
                  title="Quizzes (30%)"
                  classNames={{
                      trigger: "border-b-blue-600",
                  }}
          subtitle={`${quizzes.length} assessments`}
            indicator={({ isOpen }) => (
              <div className='border-1 h-[30px] w-[30px] flex items-center justify-center rounded-[4px] hover:bg-gray-500 hover:text-white'>
            <HiChevronDown
              className={`h-4 w-4 transition-transform }`} 
            /></div>
          )}
        >
          <CardBody className="space-y-3 pt-0">
            {quizzes.map((quiz) => {
              const { variant, label } = statusConfig[quiz.status as keyof typeof statusConfig];
              return (
                <div key={quiz.id} className="mt-1 bg-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <Paragraph className='font-semibold'>{quiz.name}</Paragraph>
                      <small className="text-muted block">
                        Due: {quiz.due} | Max: {quiz.max} points
                      </small>
                    </div>
                    <div className="flex items-center">
                            <Chip size="sm" className='mr-3 text-white bg-blue-600 rounded-[4px] h-[20px]'>{label}</Chip>
                      <Button variant="bordered" size="sm" className="my-2 rounded-[4px] border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        Grade
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
            <Button variant="bordered" size="sm" className="mt-2 flex items-center w-[120px] rounded-[4px] hover:bg-gray-500 hover:text-white hover:border-gray-500">
              <HiPlus size={20} className="h-4 w-4 mr-1" />
              Add Quiz
            </Button>
          </CardBody>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}

