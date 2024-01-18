"use client";

import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { useModal } from "@/app/hooks/useModalStore";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const DetailMentor = () => {
  // Delete modal digunakan untuk menghapus berbagai jenis data jadi perlu dibedain waktu onSubmit-nya, ntar pake parameter aja
  const { isOpen, data, onClose } = useModal();
  const isModalOpen = isOpen;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      toast.loading("Loading...");
    } else {
      toast.dismiss();
    }
  }, [isSubmitting]);

  const handleApplyMentor = async () => {
    setIsSubmitting(true);

    const hardcodeProjectId = "652f7761-6157-424f-9e3f-0bb024ed9b38";
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL +
        `/api/v1/mentors/${data.mentorId}/assign/${hardcodeProjectId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.userToken,
        },
      }
    );

    if (res.ok) {
      setTimeout(() => {
        toast.success(`You have applied to ${data.name} as a mentor!`);
      }, 5000);
      onClose();
    } else {
      const { message } = await res.json();
      setTimeout(() => {
        toast.error(message);
      }, 5000);
    }
    setIsSubmitting(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      title={data.name}
      subtitle={data.role}
      company={data.company}
      userToken={data.userToken}
      mentorId={data.mentorId}
      imageURL={data.imageURL}
      actionLabel="Apply"
      description={data.description}
      secondaryActionLabel="Close"
      onSubmit={handleApplyMentor}
      secondaryAction={onClose}
      onClose={onClose}
    />
  );
};

export default DetailMentor;
