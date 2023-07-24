import prueba from "../../../assets/Home/LaptopMockup.png";

export default function HowWorkSection() {
  return (
    <section className="w-full h-[500px] flex flex-col tablet:flex-row laptop:flex-row desktop:flex-row items-center justify-center bg-gradient-to-r from-[#41295A] to-[#2F0743] rounded-xl">
      <div className="w-full tablet:w-1/2 laptop:w-1/2 desktop:w-1/2 text-7xl text-center tablet:text-start laptop:text-start desktop:text-start flex justify-center tablet:justify-start laptop:justify-start desktop:justify-start items-center pl-0 tablet:pl-8 laptop:pl-8 desktop:pl-8 pt-6 tablet:pt-0 laptop:pt-0 desktop:pt-0 text-white">
        <h4 className="text-7xl">
          Mockups de <span className="text-[#EF90F8]">alta</span>
          <br /> 
          <span className="text-[#EF90F8]">calidad</span>
        </h4>
      </div>
      <div className="w-full tablet:w-1/2 laptop:w-1/2 desktop:w-1/2 h-[60vh] flex justify-end items-center">
        <img src={prueba} className=" w-[80%]" />
      </div>
    </section>
  );
}
