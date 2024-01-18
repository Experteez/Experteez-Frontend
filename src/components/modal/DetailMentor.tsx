"use client";

import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { useModal } from "@/app/hooks/useModalStore";
import toast from "react-hot-toast";

const DetailMentor = () => {
  // Delete modal digunakan untuk menghapus berbagai jenis data jadi perlu dibedain waktu onSubmit-nya, ntar pake parameter aja
  const { isOpen, data, onClose } = useModal();
  const isModalOpen = isOpen;
  const router = useRouter();

  return (
    <Modal
      isOpen={isModalOpen}
      title={data.name}
      subtitle={data.role}
      imageURL={data.imageURL}
      actionLabel="Apply"
      description={data.description}
      secondaryActionLabel="Close"
      onSubmit={() => {
        toast.success(`You have applied to ${data.name} as a mentor!`);
        onClose();
      }}
      secondaryAction={onClose}
      onClose={onClose}
    />
  );
};

export default DetailMentor;
