import { ReactNode } from 'react';

const ModalFooter = ({ children }: { children: ReactNode }) => {
  return (
    <div className='border-top border-neutral-300 pt-1 mt-auto'>
      <div className='mx-1-5 flex flex-justify-flex-end gap-1'>{children}</div>
    </div>
  );
};

export default ModalFooter;
