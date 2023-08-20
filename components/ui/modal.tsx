
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";

interface ModalProps {
    title:string;
    description: string;
    isOpen:  boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        This is the dialog box!
                    </DialogTitle>
                </DialogHeader>

                    <DialogDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio totam quasi eveniet veritatis ratione dolore nisi cum incidunt vel et quaerat reiciendis nemo harum quibusdam perspiciatis, nobis velit quod!
                    </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}