"use client";

import { Modal } from "@/components/ui/modal";
// import { UserButton } from "@clerk/nextjs";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  // const storeModal = useStoreModal();
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen,onOpen]);

  return (

    <div className="p-4">

        <Modal title="Test" description="Test desc" isOpen onClose={() => {}}>
          Children
        </Modal>
        {/* <UserButton afterSignOutUrl="/" /> */}

      
    </div>
  )
}

export default SetupPage;
