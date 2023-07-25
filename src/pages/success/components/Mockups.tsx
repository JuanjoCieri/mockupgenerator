import React, { useContext, useEffect, useState } from "react";
import Divider from "./Divider";
import AppContext from "../../../utils/AppContext";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

interface DeviceData {
  device: string;
  photos: string[];
}

interface SharedDataItem {
  device: string;
  photos: {
    filename: string;
    imageBuffer: {
      data: number[];
    };
  }[];
}

export default function Mockups() {
  const { sharedData } = useContext(AppContext);
  const [imagesBase64, setImagesBase64] = useState<DeviceData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (sharedData === null || sharedData.length === 0) {
      navigate("/not-found");
    } else {
      const base64Images: DeviceData[] = sharedData.map(
        (deviceData: SharedDataItem) => ({
          device: deviceData.device,
          photos: deviceData.photos.map(
            (photo) =>
              `data:image/png;base64,${arrayBufferToBase64(
                photo.imageBuffer.data
              )}`
          ),
        })
      );
      setImagesBase64(base64Images);
    }
  }, [sharedData]);

  function arrayBufferToBase64(buffer: number[]): string {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState("");

  function onClick(value: string) {
    setOpenModal(true);
    setImage(value);
  }

  function onCloseModal() {
    setOpenModal(false);
    setImage("");
  }

  return (
    <>
      {openModal && <Modal image={image} onClose={onCloseModal} />}
      {imagesBase64.map((deviceData) => (
        <section className="flex flex-col" key={deviceData.device}>
          <Divider dividerText={deviceData.device} />
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3 gap-5 items-center">
            {deviceData.photos.map((base64Image, index) => (
              <a href="#" onClick={() => onClick(base64Image)}>
                <img
                  key={index}
                  src={base64Image}
                  alt={`${deviceData.device} ${index + 1}`}
                  className="w-96"
                />
              </a>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
