import React from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';

export default function ProductPage() {
  const router = useRouter();
  const { itemTitle } = router.query;

  return (
    <Modal>
      <div style={{ color: '#fff' }}>Hello {itemTitle}</div>
    </Modal>
  );
}
