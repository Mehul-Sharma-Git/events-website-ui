import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import Button from './common/Button';
import ThemeToggle from './ThemeToggle';
import CreateEventModal from './CreateEventModal';
import AccessEventModal from './AccessEventModal';
import JoinEventModal from './JoinEventModal';

function Navbar() {
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [showAccessModal, setShowAccessModal] = React.useState(false);
  const [showJoinModal, setShowJoinModal] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isEventPage = location.pathname.startsWith('/event/');

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <a href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Events App
              </span>
            </a>
          </motion.div>

          <div className="flex items-center space-x-4">
            {!isEventPage ? (
              <>
                <Button
                  variant="ghost"
                  onClick={() => setCreateModal(true)}
                >
                  Create Event
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setAccessModal(true)}
                >
                  Access Event
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setJoinModal(true)}
                >
                  Join Event
                </Button>
              </>
            ) : (
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
              >
                Exit
              </Button>
            )}
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <Dialog
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-background p-6 shadow-xl transition-all">
            <CreateEventModal onClose={() => setShowCreateModal(false)} />
          </Dialog.Panel>
        </div>
      </Dialog>

      <Dialog
        open={showAccessModal}
        onClose={() => setShowAccessModal(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-background p-6 shadow-xl transition-all">
            <AccessEventModal onClose={() => setShowAccessModal(false)} />
          </Dialog.Panel>
        </div>
      </Dialog>

      <Dialog
        open={showJoinModal}
        onClose={() => setShowJoinModal(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-background p-6 shadow-xl transition-all">
            <JoinEventModal onClose={() => setShowJoinModal(false)} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default Navbar;