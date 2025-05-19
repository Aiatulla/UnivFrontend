import { CustomDropdown } from "@/components/elements/custom-dropdown";
import { CustomInput } from "@/components/elements/CustomInput";

const lable = "Fruits";
const data = ["Apple", "Banana", "Cherry"];

const AdminPage = () => {
  return (
    <div className="p-10">
      <CustomDropdown mainLabel="Fruits" label={lable} data={data} />
      <CustomInput type="text" placeholder="Search..." label="Search" />
    </div>
  );
};

export default AdminPage;
