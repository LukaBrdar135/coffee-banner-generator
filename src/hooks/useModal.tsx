import { useState } from 'react';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return { isOpen, openModal, onClose };
};
