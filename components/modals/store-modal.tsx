import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {

    const storeModal = useStoreModal();

    return (

        <Modal title="Create a new store" description="Add a new store" isOpen={false} onClose={ () => {} }>
            Create Store Form
        </Modal>

    );
}