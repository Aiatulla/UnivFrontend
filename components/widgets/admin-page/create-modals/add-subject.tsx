import { CustomDropdown } from "@/components/elements/custom-dropdown";
import { CustomInput } from "@/components/elements/CustomInput";
import { CustomModal } from "@/components/modals/custom-modal";

export const AddSubjectModal = () => {
  return (
    <CustomModal
      header="Add New Subject"
      buttonLabel="Add Subject"
      button="Crete Subject"
      content={
        <div className="flex flex-col gap-5 pt-3">
          <CustomInput
            type="text"
            label="Subject Code"
            placeholder="e.g., CS101"
            inputClassName="h-[38px]"
          />
          <CustomInput
            type="text"
            label="Credits"
            placeholder="e.g., 3"
            inputClassName="h-[38px]"
          />
          <CustomInput
            type="number"
            label="Subject Name"
            placeholder="e.g., Introduction to Computer Science"
            inputClassName="h-[38px]"
          />
          <CustomDropdown className="h-[38px]" mainLabel="Department" />
        </div>
      }
    />
  );
};
