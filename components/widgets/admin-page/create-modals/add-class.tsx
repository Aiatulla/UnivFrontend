import { CustomModal } from "@/components/modals/custom-modal";
import { CustomInput } from "@/components/elements/CustomInput";
import { CustomDropdown } from "@/components/elements/custom-dropdown";

export const CreateClassModal = () => {
  return (
    <CustomModal
      header="Add New Class"
      buttonLabel="Create Class"
      button="Add Class"
      content={
        <div className="flex flex-col gap-5 pt-3">
          <CustomInput
            type="text"
            label="Class ID"
            placeholder="e.g., CS24"
            inputClassName="h-[38px]"
          />
          <CustomInput
            type="text"
            label="Class ID"
            placeholder="e.g., CS24"
            inputClassName="h-[38px]"
          />
          <CustomDropdown className="h-[38px]" mainLabel="Department" />
          <CustomDropdown className="h-[38px]" mainLabel="Starting Semester" />
        </div>
      }
    />
  );
};
