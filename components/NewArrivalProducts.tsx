import SectionTitleGenerator from "./Titles";

export default function NewArrivalProducts() {
  return (
    <div className="flex flex-col items-center justify-center min-w-full py-10 ">
      <SectionTitleGenerator
        primaryText={"Featured"}
        secondaryText={"New Arrival"}
      ></SectionTitleGenerator>

      {/* featured products */}
      <div></div>
    </div>
  );
}
