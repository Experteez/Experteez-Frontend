import { create } from "zustand";

export type ModalType =
  | "mentor"
;

interface ModalData {
  description?: string;
  imageURL?: string;
  studentId?: string;
  moduleId?: string;
  courseId?: string;
  levelId?: string;
  unitId?: string;
  userId?: string;
  questionId? : string;
  name?: string;
  firstString?: string;
  secondString?: string;
  thirdString?: string;
  role?: string;
  isDisplayed?: boolean;
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
