
import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import PostShare from '../PostShare/PostShare';

const ShareModel = ({modalOpened,setModalOpened}) => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Modal
          opened={modalOpened}
          onClose={() => setModalOpened(false)}
          size='55%'
          overlayBlur={3}
          overlayOpacity={0.55}
        >
         <PostShare />
        </Modal>
  
   
      </>
    );
  
}

export default ShareModel