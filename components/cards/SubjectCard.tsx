import { CustomButton } from "../elements/CustomButton"
import Paragraph from "../elements/Paragraph"


export const SubjectCard = () => {
  
  return (
    <div className="min-w-[200px] border-none rounded-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.01)] mb-5 transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <div className="flex flex-col">
        <Paragraph type="md" important>CS101 - Introduction to Programming</Paragraph>
        <Paragraph>Spring 2023</Paragraph>
        <div className="flex justify-between">
          <Paragraph>45 students</Paragraph>
          <Paragraph>Active</Paragraph>
        </div>

        <div className="mt-3">
            <small className="text-muted">Grading Progress</small>
            
        </div>

        <CustomButton buttonClassName="mt-3 d-grid gap-2 h-[36px]">
            View Subject
        </CustomButton>
        
      </div>
      
    </div>
  )
}