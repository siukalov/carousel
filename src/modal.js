import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'

export function Modal({ children, open = false, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="p-4 bg-white w-[800px]">
          <Dialog.Title>Pictures from the place</Dialog.Title>
          <div>
            {children}
          </div>
          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-green-400 rounded-lg" onClick={onClose}>Close</button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
