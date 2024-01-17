"use client";

import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useModal } from "@/app/hooks/useModalStore";

const DetailMentor = () => {
  // Delete modal digunakan untuk menghapus berbagai jenis data jadi perlu dibedain waktu onSubmit-nya, ntar pake parameter aja
  const { type, data, isOpen, onClose } = useModal();
  const isModalOpen = isOpen;
  const router = useRouter();

  return (
    <Modal
      isOpen={isModalOpen}
      title="Kevin Sebastian"
      subtitle="Software Engineer"
      imageURL="/mentor/auva.jpeg"
      actionLabel="Apply"
      secondaryActionLabel="Close"
      onSubmit={() => {}}
      secondaryAction={onClose}
      onClose={onClose}
      description="Kevin Sebastian is a software engineer at Google. He has been working in the industry for 5 years. He is a graduate of the University of Indonesia."
    />
  );
};

export default DetailMentor;
