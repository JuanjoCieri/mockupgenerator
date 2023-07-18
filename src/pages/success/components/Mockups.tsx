import desktop from "../../../assets/mock/desktopMockup.png";
import laptop from "../../../assets/mock/laptopMockup.png";
import phone from "../../../assets/mock/phoneMockup.png";
import tablet from "../../../assets/mock/tabletMockup.png";
import Divider from "./Divider";

export default function Mockups() {
  const res = [
    {
      device: "Desktop",
      photos: [desktop, desktop, desktop],
    },
    {
      device: "Laptop",
      photos: [laptop, laptop, laptop],
    },
    {
      device: "Movil",
      photos: [phone, phone, phone],
    },
    {
      device: "Tablet",
      photos: [tablet, tablet, tablet],
    },
  ];
  return (
    <>
      {res.map((mock) => (
        <section className="flex flex-col" key={mock.device}>
          <Divider dividerText={mock.device} />
          <div className="grid grid-cols-3 gap-5">
            {mock.photos.map((photo, index) => (
              <img key={index} src={photo} alt={mock.device} className="w-80" />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
