import { CustomDropdown } from "@/components/elements/custom-dropdown";
import { CustomInput } from "@/components/elements/CustomInput";
import { CustomModal } from "@/components/modals/custom-modal";

export const AddTeacherModal = () => {
  return (
    <CustomModal
      header="Add New Teacher"
      buttonLabel="Create Teacher"
      button="Add Teacher"
      content={
        <div className="flex flex-col gap-5 pt-3">
          {/* <CustomInput
            type="text"
            label="Student ID"
            placeholder="e.g., S123456"
            inputClassName="h-[38px]"
          /> */}
          <CustomInput
            type="text"
            label="Full Name"
            placeholder="e.g., John Doe"
            inputClassName="h-[38px]"
          />
          <CustomDropdown className="h-[38px]" mainLabel="Department" />
          <CustomInput type="text" label="Password" inputClassName="h-[38px]" />
        </div>
      }
    />
  );
};
